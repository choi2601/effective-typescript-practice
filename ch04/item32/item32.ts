// 예제 1

// layout이 fill이면서 paint가 line인 경우는 없음(잘못 된 설계 방식)
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

interface FillLayer {
  // 태그된(구분된) 유니온 사용
  type: "fill";
  layout: FillLayout;
  paint: FillPaint;
}

interface LineLayer {
  type: "line";
  layout: LineLayout;
  paint: LinePaint;
}

interface PointLayer {
  type: "point";
  layout: PointLayout;
  paint: PointPaint;
}

type Layer = FillLayer | LineLayer | PointLayer;

function drawLayer(layer: Layer) {
  if (layer.type === "fill") {
  } else if (layer.type === "line") {
  } else {
  }
}

interface Person {
  name: string;
  // 다음은 둘 다 동시에 있거나 동시에 없습니다 => 다음과 같은 주석은 사용하지 않는 것이 좋음(item 30)
  placeOfBirth?: string;
  dateOfBirth?: string;
}

interface Person2 {
  name: string;
  birth?: {
    place: string;
    date: Date;
  };
}

// 예제 2

interface Name {
  name: string;
}

interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person3 = Name | PersonWithBirth;

function eulogize(p: Person) {
  if ("placeOfBirth" in p) {
  }
}
