class Library {
  titles: string[];
  name!: string;
  yo = "yo";

  constructor(underRenovation: boolean) {
    if (!underRenovation) {
      this.titles = [];
    }
  }
}

const library = new Library(false);

const shortTitles = library.titles.filter(title => title.length < 5);
