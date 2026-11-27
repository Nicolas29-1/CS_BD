package pe.edu.uni.demospringproductor;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tools.jackson.databind.ObjectMapper;

@RestController
public class ControllerFnrc {

    @Autowired
    JmsTemplate jmsTemplate;

    @PostMapping("/enviar-fnrc")
    public Map<String, Object> enviarFnrc(@RequestBody Map<String, Object> entity) {
        ObjectMapper om = new ObjectMapper();
        String json = om.writeValueAsString(entity);
        jmsTemplate.convertAndSend("fnrc", json);
        System.out.println(">>> Mensaje enviado a la cola fnrc");
        return entity;
    }
}