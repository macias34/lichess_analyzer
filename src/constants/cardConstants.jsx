import { GiBulletBill, GiSupersonicBullet, GiRabbit } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";

class Perf {
  constructor(label, value, icon, iconColor) {
    this.label = label;
    this.value = value;
    this.icon = icon;
  }
}

const ultraBullet = new Perf(
  "ultraBullet",
  {},
  <GiSupersonicBullet color="red" />
);
const bullet = new Perf("bullet", {}, <GiBulletBill color="yellow" />);
const blitz = new Perf("blitz", {}, <AiFillThunderbolt color="gold" />);
const rapid = new Perf("rapid", {}, <GiRabbit color="cyan" />);

export const iconedPerfs = [ultraBullet, bullet, blitz, rapid];

export const PROFILE_URL = "https://lichess.org/@/";
