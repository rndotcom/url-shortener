import { Route } from '../../common/models'
import { AppController } from '../controllers/appController'

class AppRoute extends Route {
  constructor() {
    super('/')
  }

  mountRoutes() {
    super.mountRoutes()
    this.router.get('/', AppController.root)
    this.router.get('/:id', AppController.redirect())
  }
}

export default new AppRoute()
