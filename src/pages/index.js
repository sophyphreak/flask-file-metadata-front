import React from "react"
import './style.css'

const IndexPage = () => (
  <div>

  <div className="container">
    <h2>API Project: File Metadata Microservice</h2>
    <h3>User Stories:</h3>
    <ol>
      <li>I can submit a form object that includes a file upload.</li>
      <li>When I submit something, I will receive the file name, and size in bytes within the JSON response.</li>
    </ol>

    <h3>Usage:</h3>
    <p>
      Please Upload a File ...
    </p>
    <div className="view">
      <h4 id="output"></h4>
      <form enctype="multipart/form-data" method="POST" action="https://flask-file-metadata.andrew-horn-portfolio.life/api/fileanalyze/">
        <input id="inputfield" type="file" name="upfile"/>
        <input id="button" type="submit" value="Upload"/>
      </form>
    </div>
  </div>
  <div class="footer">
    <p>
      Created by Andrew Horn
    </p>
  </div>
</div>
)

export default IndexPage
