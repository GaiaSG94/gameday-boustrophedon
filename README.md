# Boustrophedon

A daily reading game for Reddit, built on [Devvit Web](https://developers.reddit.com/).

A word is hidden in a 4x6 grid of letters. The scribes wrote boustrophedon - the
first line left to right, the next right to left - and today's word follows that
snake. Tap the letters in reading order to spell it.

## How to play

1. Tap letters to build the word (tap again to remove).
2. Tap Read it out.
3. A correct reading extends your streak.

One page per day, the same for everyone; streaks stored per user in Redis.

## Stack

- React 19 + Tailwind 4 + Vite (client inside a Reddit post)
- Hono server on Devvit (`/api/init`, `/api/submit`), Redis persistence
- Deterministic daily generation (UTC seed), snake path and word placement tested

## Development

```bash
npm install
npm run dev
npm test
npm run type-check
npm run build
```

## Submission (Reddit's Game of the Day Hackathon)

- App listing: `developers.reddit.com/apps/gameday-boustrophedon` (private until judging ends)
- Demo post: public test subreddit, post running the game
