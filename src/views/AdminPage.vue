<template>
    <div>
        <!--add form-->
        <div class= "panels form-info ">
            <div class="mt-5">
             <div class="form-floating mb-3">
                <input type="number" class="form-control"  style="width: 290px;" id="id.no" required>
                <label for="floatingTextareaDisabled">ID:</label>
               
              </div>
  
              <div class="form-floating mb-3">
                <input type="text" class="form-control" style="width: 290px;" id="image" required>
                <label for="floatingTextareaDisabled">Image URL:</label>
               
              </div>
              
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="itemname"  aria-describedby="emailHelp" style="width: 290px;" required>
                <label for="floatingInputDisabled">Itemname:</label>
             
              </div>
  
              <div class="form-floating mb-3">
                <input type="number" class="form-control" name="price" style="width: 290px;" id="price" required>
                <label for="floatingTextareaDisabled">Price:</label>
               
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control"  name="category" style="width: 290px;" id="cat" required>
                <label for="floatingTextareaDisabled">Category:</label>
                
              </div>
  
              <div>
                <button class="btn btn-secondary" type="submit" id="btn" onclick="addObject()">Submit</button>
              </div>
            </div>
          </div>
          <!----admin table-->
        <div class="table" style="overflow-x:auto;">
            <table>
              <thead>
                <tr>
                    <th scope="col" class="px-5">ID</th>
                    <th scope="col" class="px-5">Image</th>
                    <th scope="col" class="px-5">Itemname</th>
                    <th scope="col" class="px-5">Price</th>
                    <th scope="col" class="px-5">Category</th>

                </tr>
                </thead>
                <tbody class="tableInfo">
                </tbody>
                <tbody></tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>

</style>