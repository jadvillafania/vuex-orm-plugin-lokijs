// Copyright (C) Atlas City Global <https://atlascity.io>
// This file is part of vuex-orm-plugin-lokijs <https://github.com/atlascity/vuex-orm-plugin-lokijs>.
//
// vuex-orm-plugin-lokijs is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// vuex-orm-plugin-lokijs is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with vuex-orm-plugin-lokijs.  If not, see <http://www.gnu.org/licenses/>.

const $delete: any = function (context: any) {
  return async function (this: any, payload: any) {
    const collectionName = this.entity
    const collection = context.loki.getCollection(collectionName)
    const data: any = {}
    data[this.localKey()] = payload
    collection.findAndRemove(data)
    const result = await this.delete(payload)
    context.loki.saveDatabase()
  }
}
export default $delete
