interface IDataService {
  getData(): unknown;
}

interface IComment {
  data: Date;
  message: string;
}

const service: IDataService;

const data = service.getData();

function isComment(unknown: unknown): unknown is IComment {
  return "message" in <IComment>unknown;
}

if (typeof data === "string") {
  data;
} else if (isComment(data)) {
  data;
} else {
  const numbers = <number[]>data;
}
