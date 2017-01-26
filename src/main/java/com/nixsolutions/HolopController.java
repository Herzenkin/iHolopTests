package com.nixsolutions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/holops")
public class HolopController
{
  private HolopRepository holopRepository;

  @Autowired
  public HolopController(HolopRepository holopRepository)
  {
    this.holopRepository = holopRepository;
  }

  @GetMapping
  public Iterable<Holop> getAll()
  {
    return holopRepository.findAll();
  }

  @GetMapping("{id}")
  public Holop get(@PathVariable("id") long id)
  {
    return holopRepository.findOne(id);
  }

  @PostMapping("{id}")
  public Holop save(@RequestBody Holop holop)
  {
    return holopRepository.save(holop);
  }

  @DeleteMapping("{id}")
  public long delete(@PathVariable("id") long id)
  {
    holopRepository.delete(id);
    return id;
  }
}
