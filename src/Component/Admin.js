import React from "react";
export default function Admin(){

  return (
    <div>
      <table class=" table table-primary table-bordered">
      <tr>
      <th scope="col">#</th>
     
      <th scope="col-mb-2">BookName</th>
      <th scope="col-mb-2">Bookid</th>
      <th scope="col-mb-2">AuthorName</th>
      <th scope="col-mb-2">Publication</th>
      </tr>
 
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Puzzles</td>
      <td>c01</td>
      <td>Addams</td>
      <td>A1 publication</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>JS</td>
      <td>D01</td>
      <td>RRe</td>
      <td>p publication</td>
    </tr>
    
  </tbody>
      </table>
      <button class="btn btn-success">Add books</button>&emsp;
      <button class="btn btn-primary">Update</button>&emsp;
      <button class="btn btn-danger">Delete</button>
    </div>
  );
}
  
