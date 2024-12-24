interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
}
interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
}

interface DriverStanding {
  position: string;
  Driver: Driver;
  Constructors: Constructor[];
  points: string;
}

interface ConstructorStanding {
  position: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

interface Location {
  locality: string;
}
interface Circuit {
  circuitId: string;
  Location: Location;
}

interface Schedule {
  round: string;
  raceName: string;
  Circuit: Circuit;
}
