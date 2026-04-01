# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NEXT_PUBLIC_FIREBASE_API_KEY=build_placeholder
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=build_placeholder.firebaseapp.com
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=build_placeholder
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=build_placeholder.appspot.com
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=000000000000
ENV NEXT_PUBLIC_FIREBASE_APP_ID=1:000000000000:web:placeholder
ENV NEXT_PUBLIC_APP_URL=https://placeholder.koyeb.app

RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/messages ./messages

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
