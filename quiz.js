jQuery(function($) {

  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }
  var data = [{"Kunstner":"Jakob Weidemann","Verk":"Storfuglen letter","Kommentar":"1959. Olje på lerret,150 x 200 cm. Bildet tilhører Sonja Henies og Niels Onstads Stiftelser.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/01_-_storfuglen_letter_jakob_weidemann.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/01_-_storfuglen_letter_jakob_weidemann.jpg"},{"Kunstner":"Inger Sitter","Verk":"In the picture","Kommentar":"Akryl,olje på lerret 97 X 130 cm. Tilhører Nasjonalmuseet for Kunst.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/02_-_in_the_picture_inger_sitter.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/02_-_in_the_picture_inger_sitter.jpg"},{"Kunstner":"Kjartan Slettemark","Verk":"Av rapport fra Vietnam. Barn overskylles av brennende napalm. Deres hud brennes til svarte sår og de dør","Kommentar":"1965,102 x 102 cm. Assemblage og olje på lerret. Tilhører Nasjonalmuseet for kunst.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/03_-_av_rapport_fra_vietnam._barn_overskylles_av_brennende_napalm._deres_hud_brennes_til_svarte_sar_og_de_dor_kjartan_slettemark.jpg","URL2":"https://morgenbladet.no/sites/default/files/styles/large/public/slettemark_blur.jpg?itok=gca435UJ"},{"Kunstner":"Per Kleiva","Verk":"Tre blad frå imperialismens dagbok","Kommentar":"1971. Silketrykk (fargeserigrafi). Hvert trykk måler 597 x 597 mm.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/04_-_tre_blad_fra_imperialismens_dagbok_per_kleiva.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/04_-_tre_blad_fra_imperialismens_dagbok_per_kleiva.jpg"},{"Kunstner":"Marianne Heske","Verk":"Gjerdeløa","Kommentar":"1980. Fra Tafjord (øverst) til Pompidousenteret i Paris og tilbake igjen","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/05_-_gjerdeloa_marianne_heske.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/05_-_gjerdeloa_marianne_heske.jpg"},{"Kunstner":"Per Inge Bjørlo","Verk":"Indre rom I. Gummirommet","Kommentar":"1980","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/06_-_indre_rom_i._gummirommet_per_inge_bjorlo.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/06_-_indre_rom_i._gummirommet_per_inge_bjorlo.jpg"},{"Kunstner":"Tom Sandberg","Verk":"Portrett av andreij nebb","Kommentar":"Portrettserie 1980. Hvert bilde 110 x 170.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/08_-_portrett_av_andreij_nebb_tom_sandberg.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/08_-_portrett_av_andreij_nebb_tom_sandberg.jpg"},{"Kunstner":"Odd Nerdrum","Verk":"Skyen","Kommentar":"1985,123 X 138,5 cm","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/09_-_skyen_odd_nerdrum.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/09_-_skyen_odd_nerdrum.jpg"},{"Kunstner":"Olav Christopher Jenssen","Verk":"Lack of memory","Kommentar":"Her ved «Vanish»,«Timid»,«Jig» og «Penetrate». Olje (enkelte ganger akryl) på lerret. Utlånt av Galleri Riis.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/10_-_lack_of_memory_olav_christopher_jenssen._her_ved_vanish_timid_jig_og_penetrate.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/10_-_lack_of_memory_olav_christopher_jenssen._her_ved_vanish_timid_jig_og_penetrate.jpg"},{"Kunstner":"Vibeke Tandberg","Verk":"Living together","Kommentar":"1996. Serie på 27 verk,her 06,09,12,02. Utlånt fra Astrup Fearnley Museets samling.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/11_-_living_together_vibeke_tandberg.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/11_-_living_together_vibeke_tandberg.jpg"},{"Kunstner":"Bjarne Melgaard","Verk":"Confessions of a recovering minimalist","Kommentar":"1996,Galleri c/o.","URL":"https://morgenbladet.no/sites/morgenbladet.no/files/12_-_confessions_of_a_recovering_minimalist_bjarne_melgaard.jpg","URL2":"https://morgenbladet.no/sites/morgenbladet.no/files/12_-_confessions_of_a_recovering_minimalist_bjarne_melgaard.jpg"},{"Kunstner":"Leonard Rickhard","Verk":"Trett modellflybygger","Kommentar":"1985. Pakkes her ut. Foto: Thomas Brun","URL":"https://morgenbladet.no/sites/default/files/styles/full_width/public/hoved.jpg","URL2":"https://morgenbladet.no/sites/default/files/styles/full_width/public/hoved.jpg"}]

  data = shuffle(data);

  var artists = $.map(data, function(work, index) {
    return $("<button>" + work["Kunstner"]  + "</button>", {
      "class": "artist-button",
    })
      .attr("data-artist", work["Kunstner"])
      .attr("data-work", index);
  });

  artists = shuffle(artists);

  var works = $.map(data, function(work, index) {
    var new_work = $("<div class='artwork' id='work-" + index + "'>");
    $("<img>", {
      "class": "work-image",
      "src":   work["URL2"],
    }).appendTo(new_work);

    new_work.data(work);

    return new_work;
  });

  function text(n) {
    switch(n) {
      case 0:
      case 1:
      case 2:
      case 3:
        return "Aj, aj, aj. Her er det mye god kunst å bli kjent med! Les Morgenbladet hver uke for å få oversikten.";
        break;
      case 4:
      case 5:
      case 6:
        return "Dette er ikke så verst, selv om du har mange hull. Altså har du mye å hente på å lese Kunstekstra!";
        break;
      case 7:
      case 8:
        return "Over halvparten, imponerende! Du liker å lese om kunst, så følg med i Morgenbladets kunstekstra!";
        break;
      case 9:
      case 10:
        return "Du er en kunstkjenner! Velkommen til oss.";
        break;
      case 11:
      case 12:
        return "Alt rett! Du er ikke tilfeldigvis en av disse tolv?";
        break;
    }
  }

  function display_results(artists, works) {
    var content = $("#content");
    content.html("");
    
    var right = $.map(artists, function(artist) {
      var result = null;
      if (artist.text() == artist.data("response")) {
        result = 1;
      } else {
        result = 0;
      }
      return result;
    });

    var n_right = right.reduce(function(a,b) { return a + b; }, 0);
    content.append($("<h2>" + n_right + " av " + artists.length + " riktige!</h2>"));
    content.append($("<p>" + text(n_right) + "</p>"));

    $.each(data, function(index, work) {
      var artist = $.grep(artists, function(artist) {
        return (index == artist.data("work"));
      })[0];

      var content = $("#content");
      var fasit = $("<div class='work-fasit'></div>");
      $("<img>",  { src: work["URL"] }).appendTo(fasit);

      var yourResponse = $("<p class='answer'></p>");

      if (artist.data("response") == work["Kunstner"]) {
        $("<span class='check correct'>&#x2714; </span>").appendTo(yourResponse);
      } else {
        $("<span class='check fail'>&#x2718; </span>").appendTo(yourResponse);
      }

      $("<span></span>", {
        "class": "response"
      })
        .html("Du svarte " + artist.data("response") + ".")
        .appendTo(yourResponse);


      var metadata = $("<p class='metadata'></p>");

      $("<span></span>", {
        "class": "artist"
      }).html(work["Kunstner"] + ": ").appendTo(metadata);
      $("<span></span>", {
        "class": "work"
      }).html(work["Verk"] + ". ").appendTo(metadata);
      $("<span></span>", {
        "class": "commment"
      }).html(work["Kommentar"]).appendTo(metadata);
      metadata.appendTo(fasit);
      yourResponse.appendTo(fasit);
      fasit.appendTo(content);
    });

    content[0].scrollIntoView(true);
  }

  function display_work(work, remaining_works, artists, all_works) {
    var content = $("#content");
    content.html(work);

    var next_work = remaining_works.shift();

    $.each(artists, function(index, artist) {
      artist.appendTo(content);
      artist.on("click", function() {
        current_work = $("#content .artwork");
        $(this).attr("data-response", current_work.data("Kunstner"));
        $(this).attr("disabled", true);

        if (next_work == undefined) {
          display_results(artists, all_works);
        } else {
          display_work(next_work, remaining_works, artists, all_works);
        }
      });
    });
    content[0].scrollIntoView(true);
  }

  display_work(works.shift(), works, artists);
});

