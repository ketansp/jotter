<template>
  <div class="alignment">
    <div>
      <h1 class="take-a-break-text">Take a break!</h1>
      <img src="../../assets/relax-take-a-break.png" class="take-a-break-image" />
    </div>
    <div class="carousel slide carousel-fade" data-ride="carousel" id="relaxation-ideas">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="15000">
          <img src="../../assets/relaxation/cook.png" class="image" alt="Cook" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Cook!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/do-yoga.png" class="image" alt="Do Yoga" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Do Yoga!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/draw.png" class="image" alt="Draw" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Draw!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/drink-coffee.png" class="image" alt="Drink Coffee" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Drink Coffee!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/drink-tea.png" class="image" alt="Drink Tea" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Drink Tea!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/go-through-old-albums.png"
            class="image"
            alt="Go Through Old Albums"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Go Through Old Albums!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/listen-to-music.png"
            class="image"
            alt="Listen to Music"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Listen to Music!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/meditate.png" class="image" alt="Meditate" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Meditate!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/paint.png" class="image" alt="Paint" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Paint!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/play-instrument-for-your-pets.png"
            class="image"
            alt="Play an Instrument for Your Pets"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Play an Instrument for Your Pets!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/play-video-game.png"
            class="image"
            alt="Play Video Game"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Play Video Game!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/play-with-your-cats.png"
            class="image"
            alt="Play With Your Cats"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Play With Your Cats!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/put-on-a-face-pack.png"
            class="image"
            alt="Put on a Face Pack"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Put on a Face Pack!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/read-a-book.png" class="image" alt="Read a Book" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Read a Book!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/read-a-novel.png" class="image" alt="Read a Novel" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Read a Novel!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/read-old-cards.png" class="image" alt="Read Old Cards" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Read Old Cards!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/relax-in-bathtub.png"
            class="image"
            alt="Relax in Bathtub"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Relax in Bathtub!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/spend-time-with-loved-ones.png"
            class="image"
            alt="Spend Time With Loved Ones"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Spend Time With Loved Ones!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img
            src="../../assets/relaxation/take-a-water-break.png"
            class="image"
            alt="Take a Water Break"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Take a Water Break!</h3>
          </div>
        </div>
        <div class="carousel-item" data-interval="15000">
          <img src="../../assets/relaxation/water-plants.png" class="image" alt="Water Plants" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Water Plants!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class RelaxationParent extends Vue {}
</script>


<style lang="scss">
.alignment {
  text-align: center;
}

.take-a-break-image {
  width: 60%;
}

.take-a-break-text {
  padding-top: 140px;
  padding-bottom: 140px;
}

#relaxation-ideas {
  .carousel-caption {
    position: inherit;
    padding-top: none;
    color: inherit;
    left: inherit;
    right: inherit;
  }

  .carousel {
    padding-top: 140px;
  }

  .image {
    height: 400px;
  }
}
</style>
