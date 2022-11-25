// 예제 1

interface ScatterProps {
  xs: number[];
  ys: number[];
  xRange: [number, number];
  yRange: [number, number];
  color: string;
  // 이벤트 핸들러가 변경될 땐 재렌더링 할 필요가 없음을 가정
  onClick: (x: number, y: number, index: number) => void;
}

// 값이 변경될 때마다 재렌더링 발생
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== "onClick") return true;
    }
  }
  return false;
}

// 실제로 재렌더링이 필요한 순간 누락될 가능성 => 우선 망치지 말 것(히포크라테스 전집의 원칙)
function shouldUpdate2(oldPros: ScatterProps, newProps: ScatterProps) {
  return (
    oldPros.xs !== newProps.xs ||
    oldPros.ys !== newProps.ys ||
    oldPros.xRange !== newProps.xRange ||
    oldPros.yRange !== newProps.yRange ||
    oldPros.color !== newProps.color
  );
}

// 타입 체커의 사용(매핑된 타입과 객체의 사용)
const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

function shouldUpdate3(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE) {
      return true;
    }
  }
  return false;
}
