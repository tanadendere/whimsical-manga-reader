// get top manga
export function getTrendingManga() {
  fetch(
    "https://api.comick.io/top?type=trending&comic_types=manga&accept_mature_content=false"
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error getting trending manga", error));
}

// get top manhua
export function getTrendingManhua() {
  fetch(
    "https://api.comick.io/top?type=trending&comic_types=manhua&accept_mature_content=false"
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error getting trending manhua", error));
}

// get top manhwa
export function getTrendingManhwa() {
  fetch(
    "https://api.comick.io/top?type=trending&comic_types=manhwa&accept_mature_content=false"
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error getting trending manhua", error));
}

// search for comics
export function search(query: string) {
  fetch(
    `https://api.comick.io/v1.0/search/?type=comic&page=1&limit=15&showall=false&q=${query}&t=false`
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error in search", error));
}

// get the comic's information
export function getComicInfo(slug: string) {
  fetch(`https://api.comick.io/comic/${slug}/`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error getting comic information", error));
}

// get chapters of a comic
export function getComicChapters(comicHid: string) {
  fetch(`https://api.comick.io/comic/${comicHid}/chapters?lang=en`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) =>
      console.error("Error getting chapters of a comic", error)
    );
}

// get the chapter
export function getAChapter(chapterHid: string) {
  fetch(`https://api.comick.io/chapter/${chapterHid}/`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
    })
    .catch((error) => console.error("Error getting a chapter", error));
}
