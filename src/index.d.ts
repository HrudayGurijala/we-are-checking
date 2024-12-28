interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  code: string;
  permanentNumber: string;
  nationality: string;
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
  wins: string;
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
  date: string;
}

interface DriverDetails {
  position: string;
  Driver: Driver;
  Constructors: Constructor[];
  points: string;
  wins: string;
}
