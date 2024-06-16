# React News

React News Aggregator

![screenshot](./docs/images/screenshot.png)

## Getting Started

### Development
```
npm install
npm run dev
```

### Docker
```
git clone https://github.com/arvandmoe/react-news.git
cp .env.example .env ## Add the env file
docker build . -t "react-news:v1.0"
docker run -d -p 8080:8080 --env-file .env react-news:v1.0
```

## Getting Done

- [X] Implement News UI + Search and Filtering UI
- [X] Add News API Services
- [X] Implement Searching and Filtering
- [X] Make Responsive
- [X] Add Dockerfile and document deployment

## Features

- React + Vite + TypeScript
- [Tailwind CSS](https://tailwindui.com/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [shadcn-ui](https://github.com/shadcn-ui/ui/)
- [Redux](https://redux.js.org/)

## Project Structure

```
react-news/
├── public/            # Public assets
├── src/               # Application source code
│   ├── assets/        # Project assets
│   ├── components/    # React components
│   │   └── ui/        # shadc/ui components
│   │   └── layouts/   # layouts components
│   ├── context/       # contexts components
│   ├── data/          # Data used for prod or mocking
│   ├── config/        # Config data
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # pages/features components
│   ├── services/      # Services for calling APIs
│   ├── stores/        # Redux store + slices
│   ├── types/         # Typescript interfaces and types
│   ├── App.tsx        # Application entry point
│   ├── index.tsx      # Main rendering file
│   └── Router.tsx     # Routes component
├── .env.example       # Example env file
├── Dockerfile         # Dockerfile for dockerizing the app
├── index.html         # HTML entry point
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/arvandmoe/react-news/blob/main/LICENSE) file for details.
