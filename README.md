# Youtube Clone

Clone of Youtube app powered by React

Tech Stack:

- React
- Redux
- Tailwind CSS
- Vite Bundler

Process:

- Built a skeleton of the overall code & individual components
- Built Header section with Hamburger menu, Search bar & Profile Icon
- Built VideoContainer having a ButtonList at the top & VideoCards below
- VideoCard list is displayed using data from Youtube API V3
- Made SideBar with dynamic toggling using Hamburger Menu using Redux Store
- Setup Redux store with appSlice which is used to manage display State of SideBar
- Enabled Routing with react-router dom.
- Clicking on VideoCard re-directs to WatchPage & clicking on Home option in SideBar re-directs to HomePage
- Improved SearchBar using Suggestions API, Debouncing & using Redux store to save suggestions. This will avoid unecessary API calling
