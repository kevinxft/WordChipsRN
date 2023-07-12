export const LearningWords = [
  {
    name: 'abandon',
  },
  {
    name: 'cafeteria',
  },
  {
    name: 'thorough',
  },
  {
    name: 'interactive',
  },
  {
    name: 'tangible',
  },
  {
    name: 'pricey',
  },
  {
    name: 'philosophy',
  },
  {
    name: 'career',
  },
  {
    name: 'immersion',
  },
  {
    name: 'comprehensive',
  },
];

export const fakeLearningWords = LearningWords.map((word, id) => ({
  ...word,
  id,
  level: 0,
  sound: '美：[əˈbændən] 英：[əˈbændən]',
  desc: 'V。放弃，地弃；离弃，丟弃；使屈从；停止进行，终止 n。放任，放纵；完全屈从于压制',
}));
