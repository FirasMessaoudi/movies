package tn.sesame.dto;

import java.util.List;

import io.swagger.annotations.ApiModelProperty;
import tn.sesame.model.Role;

public class UserResponseDTO {

  @ApiModelProperty(position = 0)
  private Integer id;
  @ApiModelProperty(position = 1)
  private String username;
  @ApiModelProperty(position = 2)
  private String email;
  @ApiModelProperty(position = 3)
  List<Role> roles;



}
