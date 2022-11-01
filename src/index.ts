import Dog from './Dog';
import { add, multiply, divide } from './utils';
import ShelterDog from './ShelterDog';

const Elton = new Dog('E', 'A', 3);
Elton.bark();

console.log(add(2, 3));

const Buffy = new ShelterDog('B', 'A', 4, 'A');
