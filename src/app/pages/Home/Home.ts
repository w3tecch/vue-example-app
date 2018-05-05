import HelloWorld from '@/app/components/HelloWorld/HelloWorld';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue { }
