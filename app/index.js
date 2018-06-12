
import { addParagraph } from './helpers';
import SuperPerson from './person';

const george = new SuperPerson('George', 'laser-points');

addParagraph(george.talk('I like cats.'));

addParagraph(george.saySuperPower('laser points!'));