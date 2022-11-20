interface Friend {
  name: string;
  age: number;
  gender: string;
  onlineStatus: OnlineStatus;
}

enum OnlineStatus {
  Online,
  Offline,
  Away,
}

let morgan: Friend = {
  name: "Morgan",
  age: 30,
  gender: "Non-binary",
  onlineStatus: OnlineStatus.Online,
};
