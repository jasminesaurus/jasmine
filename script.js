// =========================================================

// JASMINE — PERSONAL ARCHIVE

// MAIN JAVASCRIPT

// =========================================================





// =========================================================

// CONTENT

// =========================================================



const CONTENT = {



  photos: [],



  videos: [],



  songs: [

    {

      file: "assets/music/DR BIRDS.mp3",

      title: "DR BIRDS",

      artist: "Griselda"

    },



    {

      file: "assets/music/Night , Blooming Jasmine.mp3",

      title: "Night, Blooming Jasmine.",

      artist: "fazekink"

    },



    {

      file: "assets/music/Buckshot (Intro).mp3",

      title: "Buckshot (Intro)",

      artist: "BAGI MUNDA, Jaskaran, Sickboi"

    },



    {

      file: "assets/music/Meat Grinder.mp3",

      title: "Meat Grinder",

      artist: "Madvillain"

    },



    {

      file: "assets/music/Hand Me Downs.mp3",

      title: "Hand Me Downs",

      artist: "Mac Miller"

    },



    {

      file: "assets/music/Nikes.mp3",

      title: "Nikes",

      artist: "Frank Ocean"

    },



    {

      file: "assets/music/Romeo (feat. Takeover Ent).mp3",

      title: "Romeo (feat. Takeover Ent)",

      artist: "Jazzy B"

    },



    {

      file: "assets/music/Sundress.mp3",

      title: "Sundress",

      artist: "A$AP Rocky"

    },



    {

      file: "assets/music/Everyday (feat. Rod Stewart x Miguel x Mark Ronson).mp3",

      title: "Everyday",

      artist: "A$AP Rocky"

    },



    {

      file: "assets/music/Gehra.mp3",

      title: "Gehra",

      artist: ""

    },



    {

      file: "assets/music/Sahara.mp3",

      title: "Sahara",

      artist: ""

    },



    {

      file: "assets/music/Nayan Tarse.mp3",

      title: "Nayan Tarse",

      artist: ""

    },



    {

      file: "assets/music/No More Parties In LA.mp3",

      title: "No More Parties In LA",

      artist: ""

    },



    {

      file: "assets/music/Power Trip (feat. Miguel).mp3",

      title: "Power Trip (feat. Miguel)",

      artist: ""

    },



    {

      file: "assets/music/HOOD FAME.mp3",

      title: "HOOD FAME",

      artist: ""

    },



    {

      file: "assets/music/Poetic Justice.mp3",

      title: "Poetic Justice",

      artist: ""

    },



    {

      file: "assets/music/Slow Jamz.mp3",

      title: "Slow Jamz",

      artist: ""

    },



    {

      file: "assets/music/Frank Ocean - Pink + White.mp3",

      title: "Pink + White",

      artist: "Frank Ocean"

    }

  ]



};





// =========================================================

// WAIT UNTIL PAGE IS READY

// =========================================================



document.addEventListener("DOMContentLoaded", () => {





  // =======================================================

  // MAIN NAVIGATION

  // =======================================================



  function goToSection(targetId) {



    if (!targetId) return;



    const target =

      document.getElementById(targetId);



    if (!target) {

      console.warn(

        `Navigation target "#${targetId}" was not found.`

      );

      return;

    }



    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });



  }





  document

    .querySelectorAll("[data-target]")

    .forEach(button => {



      button.addEventListener(

        "click",

        event => {



          event.preventDefault();

          event.stopPropagation();



          goToSection(

            button.getAttribute("data-target")

          );



        }

      );



    });





  // =======================================================

  // DOODLE COLOUR PALETTE

  // =======================================================



  const shirt =

    document.getElementById("shirt");



  const croc1 =

    document.getElementById("croc1");



  const croc2 =

    document.getElementById("croc2");





  const paintTargets = [

    shirt,

    croc1,

    croc2

  ].filter(Boolean);





  document

    .querySelectorAll(".swatch")

    .forEach(swatch => {



      swatch.addEventListener(

        "click",

        event => {



          event.preventDefault();

          event.stopPropagation();



          const colour =

            swatch.dataset.colour;



          if (!colour) return;





          paintTargets.forEach(target => {



            target.setAttribute(

              "fill",

              colour

            );



            target.style.fill =

              colour;



          });





          document

            .querySelectorAll(".swatch")

            .forEach(item => {



              item.classList.remove(

                "active"

              );



            });





          swatch.classList.add(

            "active"

          );



        }

      );



    });





  // =======================================================

  // CURSOR COLOUR REVEAL

  // =======================================================



  const hero =

    document.querySelector(".hero");



  const cursorColour =

    document.querySelector(".cursor-colour");





  let frame = 0;

  let px = -500;

  let py = -500;





  if (hero && cursorColour) {



    hero.addEventListener(

      "pointermove",

      event => {



        const rect =

          hero.getBoundingClientRect();



        px =

          event.clientX -

          rect.left -

          150;



        py =

          event.clientY -

          rect.top -

          150;





        if (!frame) {



          frame =

            requestAnimationFrame(() => {



              cursorColour.style.transform =

                `translate3d(${px}px, ${py}px, 0)`;



              frame = 0;



            });



        }



      }

    );





    hero.addEventListener(

      "pointerleave",

      () => {



        cursorColour.style.transform =

          "translate3d(-500px, -500px, 0)";



      }

    );



  }





  // =======================================================

  // MUSIC PLAYER

  // =======================================================



  const player =

    document.getElementById(

      "musicPlayer"

    );



  const playlistButton =

    document.getElementById(

      "playlistButton"

    );



  const homePlaylistButton =

    document.getElementById(

      "homePlaylistButton"

    );



  const closePlayer =

    document.getElementById(

      "closePlayer"

    );



  const audio =

    document.getElementById(

      "audio"

    );



  const playButton =

    document.getElementById(

      "play"

    );



  const prevButton =

    document.getElementById(

      "prev"

    );



  const nextButton =

    document.getElementById(

      "next"

    );



  const trackTitle =

    document.getElementById(

      "trackTitle"

    );



  const trackArtist =

    document.getElementById(

      "trackArtist"

    );



  const progressBar =

    document.getElementById(

      "progressBar"

    );



  const playlistList =

    document.getElementById(

      "playlistList"

    );





  let currentSong = 0;





  function openPlayer() {



    if (!player) return;



    player.classList.add(

      "open"

    );



    player.setAttribute(

      "aria-hidden",

      "false"

    );





    if (playlistButton) {



      playlistButton.setAttribute(

        "aria-expanded",

        "true"

      );



    }



  }





  function closePlayerPanel() {



    if (!player) return;



    player.classList.remove(

      "open"

    );



    player.setAttribute(

      "aria-hidden",

      "true"

    );





    if (playlistButton) {



      playlistButton.setAttribute(

        "aria-expanded",

        "false"

      );



    }



  }





  // TOP PLAYLIST BUTTON



  if (playlistButton) {



    playlistButton.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();





        if (

          player &&

          player.classList.contains(

            "open"

          )

        ) {



          closePlayerPanel();



        } else {



          openPlayer();



        }



      }

    );



  }





  // HOME PLAYLIST CARD



  if (homePlaylistButton) {



    homePlaylistButton.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();



        openPlayer();



      }

    );



  }





  // PLAYER CROSS



    if (closePlayer) {
    closePlayer.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      closePlayerPanel();
    });
  }


  // MOVIE RECOMMENDATIONS POPUP + ACCORDION
  // =======================================================

  const movieButton = document.getElementById("movieButton");
  const movieDropdown = document.getElementById("movieDropdown");
  const closeMovieButton = document.getElementById("closeMovieDropdown");
  const movieFolders = document.querySelectorAll(".movie-folder");

  function openMovieDropdown() {
    if (!movieDropdown) return;

    movieDropdown.classList.add("open");
    movieDropdown.setAttribute("aria-hidden", "false");

    if (movieButton) {
      movieButton.setAttribute("aria-expanded", "true");
    }
  }

  function closeMovieDropdown() {
    if (!movieDropdown) return;

    movieDropdown.classList.remove("open");
    movieDropdown.setAttribute("aria-hidden", "true");

    if (movieButton) {
      movieButton.setAttribute("aria-expanded", "false");
    }

    movieFolders.forEach(folder => {
      folder.classList.remove("open");
      const tab = folder.querySelector(".movie-folder-tab");
      if (tab) tab.setAttribute("aria-expanded", "false");
    });
  }

  if (movieButton) {
    movieButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      if (movieDropdown && movieDropdown.classList.contains("open")) {
        closeMovieDropdown();
      } else {
        openMovieDropdown();
      }
    });
  }

  if (closeMovieButton) {
    closeMovieButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      closeMovieDropdown();
    });
  }

  movieFolders.forEach(folder => {
    const tab = folder.querySelector(".movie-folder-tab");
    if (!tab) return;

    tab.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const wasOpen = folder.classList.contains("open");

      movieFolders.forEach(otherFolder => {
        otherFolder.classList.remove("open");
        const otherTab = otherFolder.querySelector(".movie-folder-tab");
        if (otherTab) otherTab.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        folder.classList.add("open");
        tab.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Close movie popup when clicking outside it.
  document.addEventListener("click", event => {
    if (!movieDropdown || !movieButton) return;

    const clickedInside = movieDropdown.contains(event.target);
    const clickedButton = movieButton.contains(event.target);

    if (!clickedInside && !clickedButton) {
      closeMovieDropdown();
    }
  });

  // Escape closes the movie popup.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMovieDropdown();
    }
  });

// =======================================================

  // LOAD SONG

  // =======================================================



  function loadSong(index) {



    if (

      !CONTENT.songs.length ||

      !audio

    ) {

      return false;

    }





    currentSong =

      (

        index +

        CONTENT.songs.length

      ) %

      CONTENT.songs.length;





    const song =

      CONTENT.songs[

        currentSong

      ];





    audio.src =

      song.file;





    if (trackTitle) {



      trackTitle.textContent =

        song.title ||

        "Untitled";



    }





    if (trackArtist) {



      trackArtist.textContent =

        song.artist ||

        "";



    }





    if (progressBar) {



      progressBar.style.width =

        "0%";



    }





    return true;



  }





  // =======================================================

  // PLAY CURRENT SONG

  // =======================================================



  function playCurrent() {



    if (

      !CONTENT.songs.length ||

      !audio

    ) {

      return;

    }





    audio.play()

      .then(() => {



        if (playButton) {



          playButton.textContent =

            "Ⅱ";



        }





        if (player) {



          player.classList.add(

            "playing"

          );



        }



      })

      .catch(() => {



        console.warn(

          "Browser blocked audio playback."

        );



      });



  }





  // =======================================================

  // PLAY / PAUSE

  // =======================================================



  if (playButton) {



    playButton.addEventListener(

      "click",

      () => {



        if (

          !CONTENT.songs.length ||

          !audio

        ) {

          return;

        }





        if (!audio.src) {



          loadSong(0);



        }





        if (audio.paused) {



          playCurrent();



        } else {



          audio.pause();



        }



      }

    );



  }





  // =======================================================

  // PREVIOUS

  // =======================================================



  if (prevButton) {



    prevButton.addEventListener(

      "click",

      () => {



        if (

          loadSong(

            currentSong - 1

          )

        ) {



          playCurrent();



        }



      }

    );



  }





  // =======================================================

  // NEXT

  // =======================================================



  if (nextButton) {



    nextButton.addEventListener(

      "click",

      () => {



        if (

          loadSong(

            currentSong + 1

          )

        ) {



          playCurrent();



        }



      }

    );



  }





  // =======================================================

  // AUDIO EVENTS

  // =======================================================



  if (audio) {



    audio.addEventListener(

      "ended",

      () => {



        if (

          loadSong(

            currentSong + 1

          )

        ) {



          playCurrent();



        }



      }

    );





    audio.addEventListener(

      "pause",

      () => {



        if (playButton) {



          playButton.textContent =

            "▶";



        }





        if (player) {



          player.classList.remove(

            "playing"

          );



        }



      }

    );





    audio.addEventListener(

      "timeupdate",

      () => {



        if (!progressBar) {

          return;

        }





        if (

          audio.duration &&

          !isNaN(audio.duration)

        ) {



          progressBar.style.width =

            `${

              (

                audio.currentTime /

                audio.duration

              ) * 100

            }%`;



        } else {



          progressBar.style.width =

            "0%";



        }



      }

    );



  }





  // =======================================================

  // PLAYLIST LIST

  // =======================================================



  if (playlistList) {



    playlistList.innerHTML = "";





    CONTENT.songs.forEach(

      (song, index) => {



        const button =

          document.createElement(

            "button"

          );





        button.type =

          "button";





        button.textContent =

          `${String(index + 1).padStart(2, "0")}  ${

            song.title ||

            "Untitled"

          }${

            song.artist

              ? ` — ${song.artist}`

              : ""

          }`;





        button.addEventListener(

          "click",

          event => {



            event.preventDefault();



            openPlayer();



            loadSong(index);



            playCurrent();



          }

        );





        playlistList.appendChild(

          button

        );



      }

    );



  }





  // =======================================================

  // HOME MOVIE RECS CARD

  // =======================================================

  // Supports the movie card if it exists

  // in addition to the top movie button.

  // =======================================================



  const movieRecsCard =

    document.querySelector(

      ".movie-recs-card"

    );





  if (movieRecsCard) {



    movieRecsCard.setAttribute(

      "role",

      "button"

    );



    movieRecsCard.setAttribute(

      "tabindex",

      "0"

    );



    movieRecsCard.setAttribute(

      "aria-expanded",

      "false"

    );





    const movieList =

      movieRecsCard.querySelector(

        ".movie-recs-list"

      );





    if (movieList) {



      movieList.style.display =

        "none";



      movieList.style.overflow =

        "hidden";



    }





    function toggleMovieRecsCard() {



      if (!movieList) return;





      const isOpen =

        movieRecsCard.classList.contains(

          "open"

        );





      if (isOpen) {



        movieRecsCard.classList.remove(

          "open"

        );



        movieRecsCard.setAttribute(

          "aria-expanded",

          "false"

        );



        movieList.style.display =

          "none";



      } else {



        movieRecsCard.classList.add(

          "open"

        );



        movieRecsCard.setAttribute(

          "aria-expanded",

          "true"

        );



        movieList.style.display =

          "flex";



      }



    }





    movieRecsCard.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();



        toggleMovieRecsCard();



      }

    );





    movieRecsCard.addEventListener(

      "keydown",

      event => {



        if (

          event.key === "Enter" ||

          event.key === " "

        ) {



          event.preventDefault();



          toggleMovieRecsCard();



        }



      }

    );



  }





  // =======================================================

  // HOME CONTACT CARD

  // =======================================================



  const homeContactCard =

    document.querySelector(

      ".home-contact-card"

    );





  if (homeContactCard) {



    homeContactCard.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();



        goToSection(

          "contact"

        );



      }

    );



  }





  // =======================================================

  // NORMAL PHOTO GRID

  // =======================================================



  const photoGrid =

    document.getElementById(

      "photoGrid"

    );





  if (

    photoGrid &&

    CONTENT.photos.length

  ) {



    photoGrid.innerHTML = "";





    CONTENT.photos.forEach(

      item => {



        const img =

          document.createElement(

            "img"

          );





        img.src =

          item.file;





        img.alt =

          item.title ||

          "Jasmine photograph";





        img.loading =

          "lazy";





        photoGrid.appendChild(

          img

        );



      }

    );



  }





  // =======================================================

  // NORMAL VIDEO GRID

  // =======================================================



  const videoGrid =

    document.getElementById(

      "videoGrid"

    );





  if (

    videoGrid &&

    CONTENT.videos.length

  ) {



    videoGrid.innerHTML = "";





    CONTENT.videos.forEach(

      item => {



        const video =

          document.createElement(

            "video"

          );





        video.src =

          item.file;



        video.controls =

          true;



        video.preload =

          "metadata";



        video.playsInline =

          true;





        videoGrid.appendChild(

          video

        );



      }

    );



  }





  // =======================================================

  // PHOTO ARCHIVE

  // =======================================================



  const photoAlbums = {



    street: {



      number:

        "01 / 02",



      kicker:

        "STREET PHOTOGRAPHY",



      title:

        "street photography",



      description:

        "Small observations from places, people and everyday moments — people, work, streets and the details that usually get missed.",



      photos: [



        "IMG_9456.jpg",

        "IMG_9478.jpg",

        "IMG_9389.jpg",

        "IMG_9379.jpg",

        "IMG_9438.jpg",

        "IMG_5466 (3).jpg",

        "IMG_6248.HEIC (1).jpg"



      ]



    },





    concept: {



      number:

        "02 / 02",



      kicker:

        "CONCEPT SHOOT",



      title:

        "concept shoot",



      description:

        "Experimental portraits built around colour, movement, light and layered visual treatments.",



      photos: [



        "IMG_8874 (1).jpg",

        "IMG_1473.jpg",

        "DSC08975 (1) (3).jpg",

        "1000000332.jpg",

        "IMG_1470.jpg",

        "IMG_5969 (1) (1).jpg",

        "1000001751.jpg"



      ]



    }



  };





  // =======================================================

  // PHOTO ARCHIVE ELEMENTS

  // =======================================================



  const photoFolders =

    document.getElementById(

      "photoFolders"

    ) ||

    document.querySelector(

      ".photo-folders"

    );





  const albumView =

    document.getElementById(

      "albumView"

    );





  const albumBack =

    document.getElementById(

      "albumBack"

    );





  const albumPhotos =

    document.getElementById(

      "albumPhotos"

    );





  const albumNumber =

    document.getElementById(

      "albumNumber"

    );





  const albumKicker =

    document.getElementById(

      "albumKicker"

    );





  const albumTitle =

    document.getElementById(

      "albumTitle"

    );





  const albumDescription =

    document.getElementById(

      "albumDescription"

    );





  // =======================================================

  // IMAGE PATH

  // =======================================================



  function photoPath(filename) {



    return (

      "assets/photos/" +

      encodeURIComponent(filename)

    );



  }





  // =======================================================

  // FULL-SCREEN PHOTO VIEWER

  // =======================================================



  let lightbox =

    document.getElementById(

      "photoLightbox"

    );





  if (!lightbox) {



    lightbox =

      document.createElement(

        "div"

      );



    lightbox.id =

      "photoLightbox";



    lightbox.setAttribute(

      "aria-hidden",

      "true"

    );





    lightbox.innerHTML = `



      <button

        type="button"

        id="photoLightboxClose"

        aria-label="Close photo"

      >

        ×

      </button>



      <img

        id="photoLightboxImage"

        alt=""

      >



      <div

        id="photoLightboxCaption"

      ></div>



    `;





    Object.assign(

      lightbox.style,

      {

        position: "fixed",

        inset: "0",

        zIndex: "99999",

        background: "rgba(0,0,0,.94)",

        display: "none",

        alignItems: "center",

        justifyContent: "center",

        flexDirection: "column",

        padding: "40px",

        boxSizing: "border-box"

      }

    );





    document.body.appendChild(

      lightbox

    );



  }





  const lightboxImage =

    document.getElementById(

      "photoLightboxImage"

    );





  const lightboxCaption =

    document.getElementById(

      "photoLightboxCaption"

    );





  const lightboxClose =

    document.getElementById(

      "photoLightboxClose"

    );





  if (lightboxImage) {



    Object.assign(

      lightboxImage.style,

      {

        maxWidth: "92vw",

        maxHeight: "86vh",

        width: "auto",

        height: "auto",

        objectFit: "contain",

        display: "block",

        cursor: "zoom-out"

      }

    );



  }





  if (lightboxCaption) {



    Object.assign(

      lightboxCaption.style,

      {

        color: "#fff",

        marginTop: "12px",

        fontFamily: "monospace",

        fontSize: "12px"

      }

    );



  }





  if (lightboxClose) {



    Object.assign(

      lightboxClose.style,

      {

        position: "absolute",

        top: "18px",

        right: "24px",

        border: "0",

        background: "transparent",

        color: "#fff",

        fontSize: "42px",

        lineHeight: "1",

        cursor: "pointer",

        zIndex: "2"

      }

    );



  }





  function openPhotoLightbox(

    src,

    caption

  ) {



    if (

      !lightbox ||

      !lightboxImage

    ) {

      return;

    }





    lightboxImage.src =

      src;





    lightboxImage.alt =

      caption || "Photograph";





    if (lightboxCaption) {



      lightboxCaption.textContent =

        caption || "";



    }





    lightbox.style.display =

      "flex";





    lightbox.setAttribute(

      "aria-hidden",

      "false"

    );





    document.body.style.overflow =

      "hidden";



  }





  function closePhotoLightbox() {



    if (!lightbox) return;





    lightbox.style.display =

      "none";





    lightbox.setAttribute(

      "aria-hidden",

      "true"

    );





    if (lightboxImage) {



      lightboxImage.src =

        "";



    }





    document.body.style.overflow =

      "";



  }





  if (lightboxClose) {



    lightboxClose.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();



        closePhotoLightbox();



      }

    );



  }





  if (lightbox) {



    lightbox.addEventListener(

      "click",

      event => {



        if (

          event.target ===

          lightbox

        ) {



          closePhotoLightbox();



        }



      }

    );



  }





  if (lightboxImage) {



    lightboxImage.addEventListener(

      "click",

      closePhotoLightbox

    );



  }





  document.addEventListener(

    "keydown",

    event => {



      if (

        event.key === "Escape" &&

        lightbox &&

        lightbox.style.display === "flex"

      ) {



        closePhotoLightbox();



      }



    }

  );





  // =======================================================

  // OPEN PHOTO ALBUM

  // =======================================================



  function openPhotoAlbum(

    albumName

  ) {



    const album =

      photoAlbums[

        albumName

      ];





    if (!album) return;





    if (

      !albumView ||

      !albumPhotos

    ) {

      return;

    }





    if (albumNumber) {



      albumNumber.textContent =

        album.number;



    }





    if (albumKicker) {



      albumKicker.textContent =

        album.kicker;



    }





    if (albumTitle) {



      albumTitle.textContent =

        album.title;



    }





    if (albumDescription) {



      albumDescription.textContent =

        album.description;



    }





    albumPhotos.innerHTML =

      "";





    album.photos.forEach(

      (filename, index) => {



        const figure =

          document.createElement(

            "figure"

          );





        figure.className =

          "album-photo";





        const img =

          document.createElement(

            "img"

          );





        const src =

          photoPath(filename);





        img.src =

          src;





        img.alt =

          `${album.title} — photo ${index + 1}`;





        img.loading =

          "lazy";





        img.style.cursor =

          "zoom-in";





        const caption =

          document.createElement(

            "figcaption"

          );





        caption.textContent =

          `${String(index + 1).padStart(2, "0")} / ${String(album.photos.length).padStart(2, "0")}`;





        figure.appendChild(

          img

        );





        figure.appendChild(

          caption

        );





        albumPhotos.appendChild(

          figure

        );





        // CLICK PHOTO → FULL SCREEN



        img.addEventListener(

          "click",

          event => {



            event.preventDefault();

            event.stopPropagation();



            openPhotoLightbox(

              src,

              `${album.title} — ${String(index + 1).padStart(2, "0")} / ${String(album.photos.length).padStart(2, "0")}`

            );



          }

        );



      }

    );





    if (photoFolders) {



      photoFolders.style.display =

        "none";



    }





    albumView.classList.add(

      "open"

    );





    albumView.setAttribute(

      "aria-hidden",

      "false"

    );





    albumView.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });



  }





  // =======================================================

  // PHOTO FOLDER CLICK

  // =======================================================



  if (photoFolders) {



    photoFolders

      .querySelectorAll(

        ".photo-folder"

      )

      .forEach(folder => {



        folder.addEventListener(

          "click",

          event => {



            event.preventDefault();

            event.stopPropagation();





            openPhotoAlbum(

              folder.dataset.album

            );



          }

        );



      });



  }





  // =======================================================

  // BACK TO PHOTO FOLDERS

  // =======================================================



  if (albumBack) {



    albumBack.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();





        closePhotoLightbox();





        if (albumView) {



          albumView.classList.remove(

            "open"

          );



          albumView.setAttribute(

            "aria-hidden",

            "true"

          );



        }





        if (photoFolders) {



          photoFolders.style.display =

            "grid";





          photoFolders.scrollIntoView({

            behavior: "smooth",

            block: "start"

          });



        }



      }

    );



  }





  // =======================================================

  // VIDEO ARCHIVE

  // =======================================================



  /*

    PERSONAL VIDEOS:

      2016newyear.MOV

      gauribday25.mov

      karaoke.mp4

      masti.mp4

      unitedingrief.mp4



    DOODLE VIDEOS:

      faces.mp4

      menwho.mov

  */





  const videoCollections = {



    personal: {



      number:

        "01 / 02",



      kicker:

        "PERSONAL",



      title:

        "SIDE QUESTS",



      description:

        "edits I couldn't not make",



      videos: [



        {

          src:

            "assets/vids/2016newyear.MOV",

          title:

            "newyear2016"

        },



        {

          src:

            "assets/vids/gauribday25.mov",

          title:

            "picnic @ lodhi"

        },



        {

          src:

            "assets/vids/karaoke.mp4",

          title:

            "karaoke @ mkt"

        },



        {

          src:

            "assets/vids/masti.mp4",

          title:

            "masti"

        },



        {

          src:

            "assets/vids/unitingrief.mp4",

          title:

            "united in grief"

        }



      ]



    },





    doodles: {



      number:

        "02 / 02",



      kicker:

        "DOODLES",



      title:

        "SCRIBBLES",



      description:

        "sketchy business(pun intended)",



      videos: [



        {

          src:

            "assets/vids/faces.mp4",

          title:

            "faces"

        },



        {

          src:

            "assets/vids/menwho.mov",

          title:

            "me n who"

        }



      ]



    }



  };





  // =======================================================

  // VIDEO ARCHIVE ELEMENTS

  // =======================================================



  const videoCollectionsView =

    document.getElementById(

      "videoCollections"

    );





  const videoDrawer =

    document.getElementById(

      "videoDrawer"

    );





  const videoDrawerBack =

    document.getElementById(

      "videoDrawerBack"

    );





  const videoDrawerNumber =

    document.getElementById(

      "videoDrawerNumber"

    );





  const videoDrawerKicker =

    document.getElementById(

      "videoDrawerKicker"

    );





  const videoDrawerTitle =

    document.getElementById(

      "videoDrawerTitle"

    );





  const videoDrawerDescription =

    document.getElementById(

      "videoDrawerDescription"

    );





  const videoList =

    document.getElementById(

      "videoList"

    );





  // =======================================================

  // OPEN VIDEO COLLECTION

  // =======================================================



  function openVideoCollection(

    collectionName

  ) {



    const collection =

      videoCollections[

        collectionName

      ];





    if (!collection) {

      return;

    }





    if (

      !videoDrawer ||

      !videoList ||

      !videoCollectionsView

    ) {

      return;

    }





    if (videoDrawerNumber) {



      videoDrawerNumber.textContent =

        collection.number;



    }





    if (videoDrawerKicker) {



      videoDrawerKicker.textContent =

        collection.kicker;



    }





    if (videoDrawerTitle) {



      videoDrawerTitle.textContent =

        collection.title;



    }





    if (videoDrawerDescription) {



      videoDrawerDescription.textContent =

        collection.description;



    }





    videoList.innerHTML =

      "";





    collection.videos.forEach(

      (video, index) => {



        const figure =

          document.createElement(

            "figure"

          );





        figure.className =

          "archive-video";





        figure.style.animationDelay =

          `${index * 70}ms`;





        const videoElement =

          document.createElement(

            "video"

          );





        videoElement.controls =

          true;



        videoElement.playsInline =

          true;



        videoElement.preload =

          "metadata";





        const source =

          document.createElement(

            "source"

          );





        source.src =

          video.src;





        videoElement.appendChild(

          source

        );





        const caption =

          document.createElement(

            "figcaption"

          );





        caption.className =

          "archive-video-info";





        const title =

          document.createElement(

            "span"

          );





        title.className =

          "archive-video-title";





        title.textContent =

          video.title;





        const number =

          document.createElement(

            "span"

          );





        number.className =

          "archive-video-number";





        number.textContent =

          `${String(index + 1).padStart(2, "0")} / ${String(collection.videos.length).padStart(2, "0")}`;





        caption.appendChild(

          title

        );





        caption.appendChild(

          number

        );





        figure.appendChild(

          videoElement

        );





        figure.appendChild(

          caption

        );





        videoList.appendChild(

          figure

        );



      }

    );





    videoCollectionsView.style.display =

      "none";





    videoDrawer.classList.add(

      "open"

    );





    videoDrawer.setAttribute(

      "aria-hidden",

      "false"

    );





    videoDrawer.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });



  }





  // =======================================================

  // VIDEO COLLECTION BUTTONS

  // =======================================================



  document

    .querySelectorAll(

      ".video-collection"

    )

    .forEach(collection => {



      collection.addEventListener(

        "click",

        event => {



          event.preventDefault();

          event.stopPropagation();





          openVideoCollection(

            collection.dataset.videoCollection

          );



        }

      );



    });





  // =======================================================

  // VIDEO BACK BUTTON

  // =======================================================



  if (videoDrawerBack) {



    videoDrawerBack.addEventListener(

      "click",

      event => {



        event.preventDefault();

        event.stopPropagation();





        if (videoDrawer) {



          videoDrawer.classList.remove(

            "open"

          );





          videoDrawer.setAttribute(

            "aria-hidden",

            "true"

          );



        }





        if (videoList) {



          videoList.innerHTML =

            "";



        }





        if (videoCollectionsView) {



          videoCollectionsView.style.display =

            "";



          videoCollectionsView.scrollIntoView({

            behavior: "smooth",

            block: "center"

          });



        }



      }

    );



  }

  /* =========================================================

   DESIGN GALLERY

   ========================================================= */



document.addEventListener("click", function (event) {



  /* -----------------------------------------

     FILTER BUTTONS

     ----------------------------------------- */



  const filterButton =

    event.target.closest(".design-filter-btn");



  if (filterButton) {



    event.preventDefault();

    event.stopPropagation();



    const filter =

      filterButton.dataset.filter;



    const filterButtons =

      document.querySelectorAll(".design-filter-btn");



    const cards =

      document.querySelectorAll(".design-card");



    filterButtons.forEach(button => {

      button.classList.remove("active");

    });



    filterButton.classList.add("active");



    cards.forEach(card => {



      const category =

        card.dataset.category;



      const shouldShow =

        filter === "all" ||

        category === filter;



      card.classList.toggle(

        "is-hidden",

        !shouldShow

      );



    });



    return;

  }





  /* -----------------------------------------

     DESIGN POSTER / IMAGE CLICK

     ----------------------------------------- */



  const designButton =

    event.target.closest(".design-image-button");



  if (

    designButton &&

    !designButton.classList.contains("design-logo-trigger")

  ) {



    event.preventDefault();

    event.stopPropagation();



    openDesignLightbox(

      designButton.dataset.design

    );



  }



});





/* =========================================================

   DESIGN DATA

   ========================================================= */



const designItems = {



  ajstyles: {

    image: "assets/design/ajstyles.png",

    meta: "01 / poster",

    title: "aj styles",

    description:

      "just a lil AJ Styles propaganda (wwe)"

  },



  theshield: {

    image: "assets/design/theshield.png",

    meta: "02 / poster",

    title: "the shield",

    description:

      "three men and a very good entrance (wwe)"

  },



  dbralt: {

    image: "assets/design/dbralt.png",

    meta: "03 / poster",

    title: "dbralt",

    description:

      "had to pay my respects ( days before rodeo)"

  },



  gulabxx: {

    image: "assets/design/gulabxx.png",

    meta: "04 / poster",

    title: "gulab xx",

    description:

      "gulab. (skrillex)"

  },



  ball1: {

    image: "assets/design/ball1.png",

    meta: "05 / logo",

    title: "ball 1",

    description:

      "A hand-drawn logo treatment, edited and refined digitally in Photoshop."

  },



  ball2: {

    image: "assets/design/ball2.png",

    meta: "06 / logo",

    title: "ball 2",

    description:

      "Another hand-drawn logo treatment, edited and refined digitally in Photoshop."

  },



  ball5: {

    image: "assets/design/ball5.png",

    meta: "07 / logo",

    title: "ball 5",

    description:

      "A hand-drawn logo edited and refined in Photoshop, keeping the original sketch-like character."

  }



};





/* =========================================================

   OPEN DESIGN LIGHTBOX

   ========================================================= */



function openDesignLightbox(key) {



  const item =

    designItems[key];



  const lightbox =

    document.getElementById("designLightbox");



  const image =

    document.getElementById("designLightboxImage");



  const meta =

    document.getElementById("designLightboxMeta");



  const title =

    document.getElementById("designLightboxTitle");



  const description =

    document.getElementById("designLightboxDescription");





  if (

    !item ||

    !lightbox ||

    !image

  ) {

    return;

  }





  image.src =

    item.image;



  image.alt =

    item.title;





  if (meta) {

    meta.textContent =

      item.meta;

  }





  if (title) {

    title.textContent =

      item.title;

  }





  if (description) {

    description.textContent =

      item.description;

  }





  lightbox.classList.add("open");



  lightbox.setAttribute(

    "aria-hidden",

    "false"

  );



  document.body.style.overflow =

    "hidden";



}





/* =========================================================

   CLOSE DESIGN LIGHTBOX

   ========================================================= */



function closeDesignLightbox() {



  const lightbox =

    document.getElementById("designLightbox");



  if (!lightbox) {

    return;

  }





  lightbox.classList.remove("open");



  lightbox.setAttribute(

    "aria-hidden",

    "true"

  );



  document.body.style.overflow =

    "";



}





/* =========================================================

   LIGHTBOX CLOSE BUTTON

   ========================================================= */



document.addEventListener("click", function (event) {



  const closeButton =

    event.target.closest(

      "#designLightboxClose"

    );



  if (closeButton) {



    event.preventDefault();

    event.stopPropagation();



    closeDesignLightbox();



    return;

  }





  /* -----------------------------------------

     CLICK OUTSIDE LIGHTBOX

     ----------------------------------------- */



  const lightbox =

    document.getElementById(

      "designLightbox"

    );



  if (

    lightbox &&

    event.target === lightbox

  ) {



    closeDesignLightbox();



  }



});





/* =========================================================

   ESC KEY

   ========================================================= */



document.addEventListener(

  "keydown",

  function (event) {



    if (event.key === "Escape") {



      closeDesignLightbox();



    }



  }

);





  // =======================================================

  // INITIAL PLAYER STATE

  // =======================================================



  if (player) {



    player.setAttribute(

      "aria-hidden",

      "true"

    );



  }





  // =======================================================

  // INITIAL MOVIE STATE

  // =======================================================



  if (movieDropdown) {



    movieDropdown.setAttribute(

      "aria-hidden",

      "true"

    );



  }





  // =======================================================

  // INITIAL PLAYLIST TRACK

  // =======================================================



  if (

    CONTENT.songs.length &&

    audio

  ) {



    loadSong(0);



  }





});