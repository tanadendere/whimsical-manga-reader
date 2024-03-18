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
      console.log("Manga");
      console.log(jsonResponse);
    })
    .catch((error) => console.error("Error getting trending manga ", error))
    .finally(() => console.log("The network call has been finalised"));
}
// get top manhwa
// export function getTrendingManhwa() {
//   fetch(
//     "https://api.comick.cc/top?type=trending&comic_types=manhwa&accept_mature_content=false"
//   )
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//       if (!jsonResponse) {
//         throw new Error("Test catch?");
//       }
//       console.log("Manhwa");
//       console.log(jsonResponse);
//     })
//     .catch((error) => console.error("Error getting trending manhwa ", error))
//     .finally(() => console.log("The network call has been finalised"));
// }

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
      console.log("Manhua");
      console.log(jsonResponse);
    })
    .catch((error) => console.error("Error getting trending manhua ", error))
    .finally(() => console.log("The network call has been finalised"));
}

// search for comics
export function search(query: string) {
  fetch(
    `https://api.comick.cc/v1.0/search/?page=1&limit=15&showall=false&q=${query}&t=false
 `
  )
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
      console.log("Search results");
      console.log(jsonResponse);
    })
    .catch((error) => console.error("Error in search ", error))
    .finally(() => console.log("The network call has been finalised"));
}

// get the comic's information
export function getComicInfo(slug: string) {
  fetch(`https://api.comick.cc/comic/${slug}/`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
      console.log("Comic Information");
      console.log(jsonResponse);
    })
    .catch((error) => console.error("Error getting comic information ", error))
    .finally(() => console.log("The network call has been finalised"));
}

// get chapters of a comic
export function getComicChapters(comicHid: string) {
  fetch(`https://api.comick.cc/comic/${comicHid}/chapters?lang=en`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
      console.log("Comic Chapters");
      console.log(jsonResponse);
    })
    .catch((error) =>
      console.error("Error getting chapters of a comic ", error)
    )
    .finally(() => console.log("The network call has been finalised"));
}

// get the chapter
export function getAChapter(chapterHid: string) {
  fetch(`https://api.comick.cc/chapter/${chapterHid}/`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        throw new Error("Test catch?");
      }
      console.log("Chapters");
      console.log(jsonResponse);
    })
    .catch((error) => console.error("Error getting a chapter ", error))
    .finally(() => console.log("The network call has been finalised"));
}
