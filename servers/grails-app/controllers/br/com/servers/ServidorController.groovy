package br.com.servers

import grails.converters.JSON

class ServidorController {

    static scaffold = Servidor
    def servidorService

    def ps(Servidor servidorInstance){
      def retorno = servidorService.listContainer(servidorInstance)
      render retorno as JSON
    }

}
