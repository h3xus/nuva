import { Component, Vue } from 'vue-property-decorator'
import { bCard } from 'bootstrap-vue/es/components/card/card'
import { Logger } from '../../../util/log'




@Component({
  template: require('./about.html'),
  components: {
    'b-card': bCard
  }
})
export class AboutComponent extends Vue {

  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript'
  protected logger: Logger

  mounted () {
    if (!this.logger) this.logger = new Logger()
    this.$nextTick(() => this.logger.info('card is ready!'))
  }
}
