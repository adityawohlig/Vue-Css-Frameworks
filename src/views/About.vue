<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="text-center">
  <b-spinner ></b-spinner>
  <b-spinner type="grow" ></b-spinner>
  <b-spinner variant="primary" ></b-spinner>
  <b-spinner variant="primary" type="grow" ></b-spinner>
  <b-spinner variant="success" ></b-spinner>
  <b-spinner variant="success" type="grow" ></b-spinner>
</div>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
 

  <vs-card class = "vscard" type="5">
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="https://vuesax.com/foto2.jpg" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>
<button class="btn btn-outline-primary" @click="incWin">Increase Winnings</button>
 <div class="center">
      <vs-button
        @click="openNotification('top-right')">
        Open Notification
      </vs-button>
    </div>


    
  </div>
</template>

<script>
// vuesax, bootstrap vue used
export default {
  name: "About",
  data(){
    return {
      showDismissibleAlert: true,
      won: 100
    }
  },
   methods: {
        openNotification(position = null) {
          this.$vs.notification({
            position: position,
            title: 'Notification',
            text: `Omkar has won the Bet. Amount won $` + this.won
          })
        },
        incWin(){
          this.won += 100;
        }
      }
    }

</script>

<style  scoped>
.about {
  text-align: left;
}

.vscard{
 display: flex;
justify-content: center;
}
</style>

