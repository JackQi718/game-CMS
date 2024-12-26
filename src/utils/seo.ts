import { Game } from '../types/game';

export function generateGameMetaTags(game: Game) {
  return {
    title: `Play ${game.title} - Free Online Game | GamePix Arena`,
    description: `Play ${game.title} online for free. ${game.description}. No downloads required, play directly in your browser!`,
    keywords: `${game.title}, ${game.category}, free games, online games, browser games, HTML5 games, ${game.category.toLowerCase()} games`,
    ogTitle: `Play ${game.title} - Free Online Game`,
    ogDescription: game.description,
    ogImage: game.banner_image
  };
}

export function generateCategoryMetaTags(category: string) {
  return {
    title: `${category} Games - Play Free ${category} Games Online | GamePix Arena`,
    description: `Play the best free ${category} games online. New ${category} games added daily. No downloads needed, play instantly in your browser!`,
    keywords: `${category} games, free ${category} games, online ${category} games, browser games, HTML5 games`,
  };
}