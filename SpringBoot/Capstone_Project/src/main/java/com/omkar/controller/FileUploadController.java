package com.omkar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")
public class FileUploadController {

	@Autowired
	private FileUploadHelper fileUploadHelper;

//	@PostMapping("/upload-file")
	@RequestMapping(method = RequestMethod.POST, path = "/upload-file", 
			headers = "content-type=multipart/*")
	public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
		System.out.println(file.getOriginalFilename());
		try {

			if (file.isEmpty()) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("request contains some error");
			}
			
			boolean f = fileUploadHelper.uploadFile(file);
			if(f) {
				return ResponseEntity.ok("FIle is successfully uploaded");
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("SOmething went wrong");
	}

}
