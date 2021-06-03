import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-training',
  templateUrl: './images-training.component.html',
  styleUrls: ['./images-training.component.css']
})
export class ImagesTrainingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  selectedFile :File= null;
  name:any = "";

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onselectedname(event){
    this.name = event.target.value;

  }

  OnUpload(){
    const fd = new FormData();
    fd.append('file',this.selectedFile, this.selectedFile.name)
    fd.append('name', this.name)
    this.http.post("http://localhost:8111//upload-file", fd).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
