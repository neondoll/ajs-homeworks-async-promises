import GameSavingLoader from './classes/GameSavingLoader';

const gameSaving = { data: undefined, error: undefined };

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  gameSaving.data = saving;
}, (error) => {
  gameSaving.error = error;
});
