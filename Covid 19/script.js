function get_data() {
  fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then((response) => response.json())
    .then((data) => {
      let region = data.data.regional;

      let table_head = create_eliment("thead", ["thead"]);
      let table_h_r = create_eliment("tr", ["tr"]);

      let table_h_no = create_eliment("th", ["th"], "S.No");
      let table_h_state_name = create_eliment("th", ["th"], "State Name");
      let table_h_indian_casses = create_eliment("th", ["th"], "Indian Casses");
      let table_h_foreign_casses = create_eliment(
        "th",
        ["th"],
        "Foreign Casses"
      );
      let table_h_dischard = create_eliment("th", ["th"], "Discharged");
      let table_h_deaths = create_eliment("th", ["th"], "Deaths");
      let table_h_total_casses = create_eliment("th", ["th"], "Total Casses");

      table_h_r.appendChild(table_h_no);
      table_h_r.appendChild(table_h_state_name);
      table_h_r.appendChild(table_h_indian_casses);
      table_h_r.appendChild(table_h_foreign_casses);
      table_h_r.appendChild(table_h_dischard);
      table_h_r.appendChild(table_h_deaths);
      table_h_r.appendChild(table_h_total_casses);

      table_head.appendChild(table_h_r);

      table_body = create_eliment("tbody", ["tbody"]);

      region.forEach((e, index) => {
        table_b_r = create_eliment("tr", ["tr"], index+1);

        table_b_r_no = create_eliment("td", ["td"], e.loc);
        table_b_r_state_no = create_eliment(
          "td",
          ["td-state"],
          e.confirmedCasesIndian
        );
        table_b_r_FC = create_eliment("td", ["td"], e.confirmedCasesForeign);
        table_b_r_discharged = create_eliment("td", ["td-state"], e.discharged);
        table_b_r_death = create_eliment("td", ["td"], e.deaths);
        table_b_r_total = create_eliment(
          "td",
          ["td"],
          e.confirmedCasesIndian + e.confirmedCasesForeign
        );

        table_b_r.appendChild(table_b_r_no);
        table_b_r.appendChild(table_b_r_state_no);
        table_b_r.appendChild(table_b_r_FC);
        table_b_r.appendChild(table_b_r_discharged);
        table_b_r.appendChild(table_b_r_death);
        table_b_r.appendChild(table_b_r_total);

        table_body.appendChild(table_b_r);
      });

      document.querySelector(".table").appendChild(table_head);
      document.querySelector(".table").appendChild(table_body);
    });
}

get_data();

function create_eliment(tag, class_name = [], inner_info) {
  let el = document.createElement(tag);
  class_name.forEach((e) => {
    el.classList.add(e);
  });

  if (inner_info !== undefined) {
    el.innerHTML = inner_info;
  }

  return el;
}
