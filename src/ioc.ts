import { Container } from "inversify";

const TYPES = {
  Warrior: Symbol.for("Warrior"),
};

const IOCContainer = new Container();

IOCContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
IOCContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
IOCContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export const container = IOCContainer;
