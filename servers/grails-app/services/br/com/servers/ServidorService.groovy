package br.com.servers

import grails.transaction.Transactional
import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse

@Transactional
class ServidorService {

    def listContainer(Servidor servidor) {
      RestBuilder rest = new RestBuilder()
      RestResponse resp = rest.get("http://${servidor.IP}:${servidor.porta}/ps")
      return resp.json
    }
}
