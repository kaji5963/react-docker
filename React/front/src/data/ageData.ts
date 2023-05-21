//１５歳〜６５歳までの配列データを作成
export const ageData = () => {
  const ageData = [];

  for (let age = 15; age <= 65; age++) {
    ageData.push({ value: `${age}歳` });
  }

  return ageData;
};
