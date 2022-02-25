$(document).ready(function()
{ 
  var skudata=[];
  $('#update').hide();
  $('.error').hide();
  $('.success').hide();
  $("#add_product").click(function()
  { 
    console.log('clicked on add product')
    var sku=$("#product_sku").val();
    var name=$("#product_name").val();
    var price=$("#product_price").val();
    var quantity=$("#product_quantity").val();
    $("#product_sku").val('');
    $("#product_name").val('');
    $("#product_price").val('');
    $("#product_quantity").val('');
    
    if(elementinsku(sku))
    {
      $('.success').hide();
      $('.error').show()
      return ;
    }
    else
    {
    
      skudata.push(sku);
    }
    
    //error

    if(sku=="" || name=="" || price=="" || quantity=="" )
    {    
      $('.success').hide();
         $('.error').show()
         return ;
    }


    var txt1 = $("<td></td>").text(sku);
    var txt2 = $("<td></td>").text(name); 
    var txt3 = $("<td></td>").text(price); 
    var txt4 = $("<td></td>").text(quantity); 
    var edit = $("<button>edit</button>");
    var deletes = $("<button>delete</button>");
    var txt =$("<tr></tr>").append(txt1,txt2,txt3,txt4);


    $(txt).append(edit);
    $(txt).append(deletes);
    $('table').append(txt);


    // edit click
    $(edit).click(function ()
    {
      console.log('clicked on edit');
      $("#product_sku").val(sku);
      $("#product_name").val(name);
      $("#product_price").val(price);
      $("#product_quantity").val(quantity);

        $('#update').click(function()
        {

          sku=$("#product_sku").val();
          name=$("#product_name").val();
          price=$("#product_price").val();
          quantity=$("#product_quantity").val();
          $("#product_sku").val('');
          $("#product_name").val('');
          $("#product_price").val('');
          $("#product_quantity").val('');
          

          console.log('clicked on update');
          if(elementinsku(sku))
            {
              $('.success').hide();
              $('.error').show()
              return ;
            }
          else
          {
          
            skudata.push(sku);
          }
    
          //error

          if(sku=="" || name=="" || price=="" || quantity=="" )
          {    
            $('.success').hide();
              $('.error').show()
              return ;
          }

         $(txt1).text(sku);
         $(txt2).text(name);
          $(txt3).text(price);
          $(txt4).text(quantity);

          $('#update').hide();
          $('#add_product').show();

        })


        $('#add_product').hide()
      $('#update').show();
    });

    //delete button
    $(deletes).click(function ()
    {
      console.log('clicked on delete');
      $(txt1).remove();
      $(txt2).remove();
      $(txt3).remove();
      $(txt4).remove();
      $(edit).remove();
      $(deletes).remove();
      deleteinsku(sku)

    });
    $('.error').hide();
    $('.success').show();
  })

  function elementinsku(temp)
  {
    console.log(12);
    l=skudata.length
    for (i=0;i<l;i++)
    {
      if(skudata[i]==temp)
      {
        return true;
      }

    }
  }
  function deleteinsku(temp)
  {
    console.log(skudata);
    skudata.pop(temp);
    console.log(skudata);
  }
});


