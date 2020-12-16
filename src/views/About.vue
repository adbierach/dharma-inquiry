<template>
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
    <!-- Replace with your content -->
<div class="bg-gray-50">
    <div class="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <!-- <h2 class="text-4xl font-display font-semibold text-gray-900 md:text-5xl">
        Spark interesting conversations
      </h2> -->
      <h2 class="wordCarousel flex text-4xl font-display font-semibold text-gray-900 md:text-5xl">    
        <span>Spark</span>  
        <div> 
<!--        Use classes 2,3, or 4 to match the number of words --> 
            <ul class="flip4"> 
                <li class="text-blue-700">🔥🔥🔥</li>
                <li class="text-green-300">meaningful</li>
                <li class="text-indigo-600">enlivening</li> 
                <li class="text-indigo-300">interesting</li>
            </ul>
        </div>
      </h2>
      <h2 class="text-4xl font-display font-semibold text-gray-900 md:text-5xl">
        conversations
      </h2>
      <div class="mt-6 border-t-2 border-gray-100 pt-10">
        <dl>
          <div>
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Conversation Kindling is a game to kindle conversation!
              </dt>
              <dd class="mt-2">
                <p class="mt-4 text-base text-gray-500">
                  Have you noticed how some conversations can feel like a roaring fire, and others like trying to light a match on a windy day?
                  What if you could throw some gasoline on any conversation? 🔥
                </p>
                <p class="mt-4 text-lg leading-6 font-medium text-gray-900">The rules are simple:</p>
                <ul class="px-8 list-decimal">
                  <li class="mt-2 text-base text-gray-500">Find a question that sounds interesting to you. 🕵️‍♂️</li>
                  <li class="mt-2 text-base text-gray-500">Ask it! 🧐</li>
                  <li class="mt-2 text-base text-gray-500">For any question, you can keep asking "Why?" until you get to something fundamental or until you lose interest. 😀</li>
                </ul>
                <p class="mt-4 text-lg leading-6 font-medium text-gray-900">Use it:</p>
                <ul class="px-8 list-disc">
                    <li class="mt-2 text-base text-gray-500">With friends!</li>
                    <li class="mt-2 text-base text-gray-500">With family!</li>
                    <li class="mt-2 text-base text-gray-500">On a first date!</li>
                    <li class="mt-2 text-base text-gray-500">With yourself!</li>
                    <li class="mt-2 text-base text-gray-500">With a stranger!</li>
                </ul>
                <!-- <router-link to="/"
                  class="px-4 py-4 mt-8 rounded-md bg-green-200 hover:bg-green-300">
                  Play Now
                </router-link> -->
                <router-link to="/">
                  <button class="w-10/12 sm:w-5/12 text-white px-4 py-4 mt-8 rounded-md bg-indigo-600 hover:bg-indigo-700">Play Now</button>
                </router-link>
                <hr class="my-8">
                <p class="mt-4 text-base text-gray-500">
                  The questions come from Daniel Schmachtenberger's excellect
                  <a href="https://civilizationemerging.com/dharma-inquiry/" target="_blank" class="text-indigo-600 font-medium">Dharma Inquiry</a> process.
                  You can check out the full list of questions, as well as more guidance on how to use these questions for the purpose of self-discovery on his website.
                </p>
                <p class="mt-4 text-base text-gray-500">
                  Send me a message at inquiry@alexbierach.com for feedback or ideas for how this can be more fun and useful.
                </p>
                <p class="mt-4 text-base text-gray-500">
                  Built with Vue, Tailwind CSS, and Netlify.
                </p>
                <p class="mt-4 text-base text-gray-500">
                  Thanks to Daniel Schmachtenberger for creating the questions.
                </p>

              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
    <!-- /End replace -->
  </div>
</template>

<script>
export default {
  name: 'About',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      adjectives: ['interesting', 'fun', 'vibrant', 'meaningful', 'loving', 'enlivening']
    }
  },
  
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>


.wordCarousel {

}
.wordCarousel div {
  overflow: hidden;
  position: relative;
  float: right;
  height: 65px;
  padding-top: 10px;
  margin-top: -10px;
}

.wordCarousel li {
  padding: 0 10px;
  height: 45px;
  margin-bottom: 45px;
  display: block;
}


.flip2 { animation: flip2 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip3 { animation: flip3 14s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip4 { animation: flip4 18s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip3 {
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip4 {
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

</style>
