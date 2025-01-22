import {create} from "zustand/react";
import {Emotion, EmotionType} from "../components/BeggarEmotion.tsx";

/* interface로 타입 지정 */
interface Action {
  money: number
  emotion: EmotionType
  increase: () => void
  clear: () => void
  update: (count: number) => void
}

// zustand를 사용한 store
// set function을 사용하여 상태를 병합
const beggarLifeStore = create<Action>((set) => ({
  money: 0, // 초기값
  emotion: Emotion.DEFAULT,
  // 아래와 같이 상태를 변경하는 action function을 정의
  increase: () => set((state) => ({
    money : state.money + 1000000,
    emotion: Emotion.HAPPY,
  })),
  clear: () => set(() => ({
    money: 0,
    emotion: Emotion.SAD,
  })),
  update: (newCount: number) => set({
    money: newCount,
    emotion: Emotion.DEFAULT,
  }),
}))

export { beggarLifeStore }