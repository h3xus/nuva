import { Component, Vue, Watch } from 'vue-property-decorator'
import bCard from 'bootstrap-vue/es/components/card/card';
import bCardHeader from 'bootstrap-vue/es/components/card/card-header';
import bCardBody from 'bootstrap-vue/es/components/card/card-body';
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer';
import bCardImage from 'bootstrap-vue/es/components/card/card-footer';
import bTable from 'bootstrap-vue/es/components/table/table';
import bButton from 'bootstrap-vue/es/components/button'
import { Logger } from '../../util/log'

@Component({
  template: require('./meetingcard.html'),
  components: {
    'b-card': bCard,
    'b-card-header': bCardHeader,
    'b-card-body': bCardBody,
    'b-card-footer': bCardFooter,
    'b-card-img': bCardImage,
    'b-table': bTable,
    'b-button': bButton
  }
})
export class NavbarComponent extends Vue {

  object: { default: string } = { default: 'Default object property!' }
 
  protected logger: Logger

  @Watch('$route.path')
  pathChanged () {
    this.logger.info('Changed current path to: ' + this.$route.path)
  }

  mounted () {
    if (!this.logger) this.logger = new Logger()
    this.$nextTick(() => this.logger.info(this.object.default))
  }
}
