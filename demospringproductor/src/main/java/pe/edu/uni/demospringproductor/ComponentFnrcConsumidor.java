package pe.edu.uni.demospringproductor;

import java.util.Map;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import tools.jackson.databind.ObjectMapper;

@Component
public class ComponentFnrcConsumidor {

    @JmsListener(destination = "fnrc")
    public void recibirMensaje(String mensaje) {
        System.out.println("Mensaje recibido en fnrc: " + mensaje);
        ObjectMapper om = new ObjectMapper();
        Map<String, Object> map = om.readValue(mensaje, Map.class);
        System.out.println("Recibido: " + map);
    }
}