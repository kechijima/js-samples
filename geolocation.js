// windowを開いた時の処理
window.addEventListener('DOMContentLoaded', function () {
  // 位置情報を取得する
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log(navigator.geolocation.getCurrentPosition(successCallback, errorCallback));
});


document.addEventListener('DOMContentLoaded', function() {
  // JSONデータの例
  const projectsData = [
      { name: "案件1", value: "案件1" },
      { name: "案件2", value: "案件2" },
      { name: "案件3", value: "案件3" },
      { name: "案件4", value: "案件4" },
      // その他の案件データ
  ];

  // セレクトボックスを取得
  const selectElement = document.getElementById('projectName');

  // JSONデータからオプションを生成して追加
  projectsData.forEach(project => {
      const option = document.createElement('option');
      option.text = project.name;
      option.value = project.value;
      selectElement.appendChild(option);
  });
});

// 取得に成功した場合の処理
function successCallback(position){
    // 緯度を取得し画面に表示
    var latitude = position.coords.latitude;
    console.log(latitude);
    document.getElementById("latitude").value = latitude;
    // 経度を取得し画面に表示
    var longitude = position.coords.longitude;
    document.getElementById("longitude").value = longitude;
};

// 取得に失敗した場合の処理
function errorCallback(error){
    alert("位置情報が取得できませんでした");
};

window.onload= function(){
  
    //入力した緯度・経度を取得します。
    var idoInput = document.getElementById('latitude').value;
    var keidoInput = document.getElementById('longitude').value;
    console.log('idoInput',idoInput);
    
    //緯度・経度をLatLngクラスに変換します。
    var latLngInput = new google.maps.LatLng(idoInput, keidoInput);
    console.log(latLngInput);
  
    //Google Maps APIのジオコーダを使います。
    var geocoder = new google.maps.Geocoder();
    
    //ジオコーダのgeocodeを実行します。
    //第１引数のリクエストパラメータにlatLngプロパティを設定します。
    //第２引数はコールバック関数です。取得結果を処理します。
    geocoder.geocode(
      {
        latLng: latLngInput
      },
      function(results, status) {
        
        var address = "";
        
        if (status == google.maps.GeocoderStatus.OK) {
        //取得が成功した場合
          
          //住所を取得します。
          address = results[0].formatted_address;
          
        } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
          alert("住所が見つかりませんでした。");
        } else if (status == google.maps.GeocoderStatus.ERROR) {
          alert("サーバ接続に失敗しました。");
        } else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
          alert("リクエストが無効でした。");
        } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
          alert("リクエストの制限回数を超えました。");
        } else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
          alert("サービスが使えない状態でした。");
        } else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
          alert("原因不明のエラーが発生しました。");
        }
        
        //住所の結果表示をします。
        document.getElementById('addressOutput').value = address;
      });
  
  }

  