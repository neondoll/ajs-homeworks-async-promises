import GameSavingLoader from '../GameSavingLoader';

test('Testing the load function of the GameSavingLoader class', (done) => {
  GameSavingLoader.load().then((response) => {
    const result = JSON.parse(response);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('created');
    expect(result).toHaveProperty('userInfo');
    expect(result).toHaveProperty('userInfo.id');
    expect(result).toHaveProperty('userInfo.name');
    expect(result).toHaveProperty('userInfo.level');
    expect(result).toHaveProperty('userInfo.points');

    done(); // <- указание на завершение теста
  });
});
