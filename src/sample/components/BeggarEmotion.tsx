import {beggarLifeStore} from "../store/BeggarStore.ts";

// 거지의 감정 상태
const enum Emotion {
  DEFAULT,
  HAPPY,
  SAD,
}
export { Emotion }
export type EmotionType = typeof Emotion[keyof typeof Emotion]

type EmojiPropsType = {
  context: string
}
function EmojiComponent({ context }: EmojiPropsType) {
  return <div style={{fontSize: "50px"}}>{ context }</div>
}

function getEmoji(emotion: EmotionType) {
  switch (emotion) {
    case Emotion.DEFAULT:
      return "😞"
    case Emotion.HAPPY:
      return "😁"
    case Emotion.SAD:
      return "😢"
  }
}

const BeggarEmotion = () => {
  // Store에 저장되어있는 값을 아래와 같이 간편하게 꺼내 쓸 수 있다
  const emotion = beggarLifeStore(state => state.emotion);
  return <EmojiComponent context={getEmoji(emotion)} />;
}

export default BeggarEmotion
