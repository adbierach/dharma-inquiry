<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- Replace with your content -->
    <div class="px-4 py-6 sm:px-0">
      <div class="border-2 border-gray-200 rounded-xl
        py-12 text-center max-w-lg mx-auto shadow-md">
        <h3 class="text-3xl font-bold">
            {{ currentQuestion }}
        </h3>
        <button @click="newQuestion" class="px-4 py-4 mt-8 rounded-md bg-green-200 hover:bg-green-300">New Question</button>
      </div>
    </div>
    <!-- /End replace -->
  </div>
</template>

<script>
export default {
  name: 'Question',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      currentQuestion: '',
      capacityQuestions: [
        'If my financial needs were already met for the rest of my life, what would I do?',
        'If I had the wealth of Bill Gates or Warren Buffet, what would I do with my life and resources?',
        'If I was going to go back to school, what would I study?',
        'If I could download skills matrix style, what would the top few most desired be?',
        'If I was a lot more confident/ less fearful, what would I do and how would I be differently?',
        'If I was meaningfully smarter than I currently am, what would I do and how would I be differently?',
        'If I had much better discipline, what would I do and how would I be differently?',
        'If I was better with people (more understanding, charismatic, empathetic, patient, etc.), what would I do and how would I be differently?',
        'If I had better emotional regulation, what would I do and how would I be differently?',
        'If my main character deficits were resolved, what would I do and how would I be differently?',
        'If I had the right team and people supporting me, what would I do and how would I be differently?',
        'If my life started over with a clean slate (no previous commitments, baggage, etc.), what would I do and how would I be differently?'
      ],
      valueQuestions: [
        'Who are you most inspired by (that you personally know or figures from history)? What about them inspires you?',
        'Who do you respect the most? What about them?',
        'What virtues would you most want to increase in yourself? Why those ones?',
        'What types of behavior and people bother you the most?',
        'What issues in the world upset you the most?',
        'What do you see as most deeply wrong with or off in the world?',
        'What do you find the most beauty in? What are you most moved by?',
        'Who would you be the most proud to have been looking back at your life?',
        'What news stories about the world would you be most positively moved to see?',
        'What would you spend your time working on if you could succeed but no one would ever know that you did it?',
        'What few qualities would you most want to increase in everyone if you could?',
        'What would you sacrifice personal benefit for?',
        'What is more important to you than your own life?',
        'What is sacred to you? What does sacred mean?',
        'What are you devoted to? What does devotion mean?',
        'What is the basis of meaningfulness?',
        'What are you loyal to? What does loyalty mean? What would be an adequate reason to violate a loyalty?',
        'What do you feel shame or guilt about?',
        'If all your personal desires were already met, what would you then desire or care about?'
      ],
      propensityQuestions: [
        'What am I naturally good at? What seems to come easy to me? (Looking at strengths and aptitudes more than specific skills.)',
        'What types of activities do I feel replenished by?',
        'What am I willing to do even if it taxes me?',
        'What do I enjoy doing for its own sake, independent of producing results or getting acknowledgement?',
        'What is my attention repeatedly called to? What can I not not pay attention to?',
        'What am I intrinsically fascinated by? Passionate about?',
        'Where have I felt the most pride/satisfaction related to something I did?',
        'When have I felt most fully alive?',
        'What have been the greatest difficulties/pains in my life?'
      ]
    }
  },
  mounted () {
    this.currentQuestion = this.randomQuestion()
  },
  computed: {
    allQuestions () {
      return [...this.capacityQuestions, ...this.valueQuestions, ...this.propensityQuestions]
    }
  },
  methods: {
    newQuestion() {
      this.currentQuestion = this.randomQuestion()
    },
    randomQuestion () {
      return this.allQuestions[Math.floor(Math.random() * this.allQuestions.length)]
    }
  }
}
</script>
