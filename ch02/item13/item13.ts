// 예제 1

interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number };

class StateT implements TState {
  name: string = "";
  capital: string = "";
}
class StateT implements IState {
  name: string = "";
  capital: string = "";
}

// 예제 2

type Input { };
type Output {  };
interface VariableMap {
    [name: string]: Input | Output;
}
type NamedVariable = (Input | Output) & {name: string};

type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];
interface Tuple {
    0: number;
    1: number;
    length: 2;
}

interface IState {
    name: string;
    capital: string;
}
interface IState {
    population: number;
}
const wyoming: IState = {
    name: 'Wyoming',
    capital: 'Seoul',
    population: 500_500
}