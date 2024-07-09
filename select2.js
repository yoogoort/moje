var sensbitgls = function(s) {
  var o = "",
    n = !1,
    r = {
      module: "",
      text_choose_point: "",
      text_point_cod: "",
      loaded: !1,
      id_interval: !1,
      use_desintifier: !1,
      carriers: [],
      carriers_cod: [],
      point: "",
      point_label: "",
      carrier_selector: ".delivery_option_radio",
      point_required: !1,
      validate_cod: 0,
      map_is_open: !1,
      x13opc: !1,
      onepagecheckout: !1,
      supercheckout: !1,
      onepagecheckoutps: !1,
      wkonepagecheckout: !1,
      spstepcheckout: !1,
      steasycheckout: !1,
      easypay: !1,
      bestkit_opc: !1,
      google_key: "AIzaSyDZc6Ajf0PqhUAzbktozQyHFpi5V7TZW_o",
      use_interval: !1,
      conf_btn: "button[name=processCarrier]",
      ps17: !1,
      ajax_url: "",
      show_chooser_below_list: !1,
      selected_country: ""
    };

  function a(e) {
    return e.text
  }

  function c(e) {
    return e.split("").reverse().join("")
  }

  function t() {
    0 < s(".delivery-option.sensbitgls").length && s(".delivery-option.sensbitgls").removeClass("sensbitgls");
    var e, t, o, n, i = s(r.carrier_selector).filter(":checked");
    n = i.hasClass("wk_selected_shipping") && void 0 !== i.data("idCarrier") ? parseInt(i.data("idCarrier")) : parseInt(i.val()), r.use_desintifier && 3 < n.toString().length && n.toString().indexOf(",") <= -1 && (n = parseInt((o = (o = n).toString(), e = parseInt(o[0]), o = (o = c(o.substr(1))).split("0".repeat(e + 1)), c(o.join(","))))), -1 !== s.inArray(n, r.carriers) ? (r.point_required = !0, r.point.length <= 0 && s(r.conf_btn + ", input#cgv, input#cgv2, input#privacy_policy, input#kb_super_policy_1, input#kb_super_policy_2, #conditions_to_approve\\[terms-and-conditions\\]").filter(":checkbox").each(function() {
      s(this).prop("checked", !1), void 0 !== s.uniform && s.uniform.update(this), "function" == typeof updatePaymentMethodsDisplay && updatePaymentMethodsDisplay()
    }), e = "append", r.show_chooser_below_list ? (r.onepagecheckoutps ? ((t = i.closest(".delivery-options")).length || (t = i.closest(".delivery_options_address")), e = "append") : r.onepagecheckout ? (t = s("#carriers_section"), e = "after") : r.supercheckout ? t = s("#shipping-method") : r.spstepcheckout ? t = s("#shipping_container") : e = r.steasycheckout ? (t = s("#js-delivery"), "after") : ((t = s(r.ps17 ? ".delivery-options-list .delivery-options" : ".delivery_options_address")).length || (t = s(".delivery-options-list .delivery-options")), "append"), t.is("table") && (e = "after")) : r.x13opc ? (t = i.closest(".delivery_option")).length || (t = i.closest("tr")) : r.onepagecheckout ? (t = i.closest("tr")).length || (t = i.closest(".delivery_option")) : r.onepagecheckoutps ? (t = i.closest(".delivery-option, .delivery_option"), e = "after") : r.supercheckout ? (t = i.closest("tr")).length <= 0 && (t = i.closest("li")) : r.easypay ? t = i.closest("tr") : r.wkonepagecheckout ? (e = "after", (t = s(r.carrier_selector).closest(".wk-shipping-list")).length <= 0 && (t = s(r.carrier_selector).closest("#wk_shipping_section"), e = "append")) : r.bestkit_opc ? t = i.closest("tr") : ((t = (t = (t = (t = (t = (t = i.closest(r.ps17 ? ".delivery-option" : ".delivery_option")).length ? t : i.closest(r.ps17 ? ".delivery_option" : ".delivery-option")).length ? t : i.closest(".delivery-box")).length ? t : i.closest(".r-option")).length ? t : i.closest(".form-group")).length ? t : i.closest(".tablecart")).length || (t = i.next("label")), e = "after"), r.validate_cod = -1 !== s.inArray(n, r.carriers_cod) ? 1 : 0, ("after" === (e = t.is("tr") ? "after" : e) ? t.parent() : t).find("." + r.module + "." + r.validate_cod).length || ((o = s("#" + r.module).clone(!0)).removeAttr("id"), o.addClass(r.validate_cod.toString()), r.show_chooser_below_list && r.ps17 ? o.css("margin-top", "0") : r.ps17 && t.is("label") && o.css("margin-top", "20px").css("margin-left", 0).css("margin-right", 0), r.show_chooser_below_list || !r.x13opc && !t.is("tr") ? "append" === e ? t.append(o) : "after" === e && t.after(o) : ((i = t).is("tr") || (t = t.find("tr")), o.css("margin", "0"), n = t.find("td").length, t.find("td").css("border", "0"), (n = s('<tr class="' + r.module + '-tr"><td colspan="' + n + '" style="border:0;padding:0;" class="' + r.module + '-td"></td></tr>')).find("td").append(o), t.after(n), n = t.next("." + r.module + "-tr").find("." + r.module + "-td"), i.width() < n.width() && !r.supercheckout ? n.css("max-width", "0") : r.supercheckout ? (t.next(".sensbitgls-tr").css("display", "block"), n.css("display", "block"), n.css("width", "100%")) : r.bestkit_opc && n.css("max-width", "0")), s(o).find("." + r.module + "-point-select").not(".active").addClass("active").select2sensbitgls({
      language: "pl",
      allowClear: !1,
      closeOnSelect: !0,
      selectOnClose: !1,
      width: 300,
      ajax: {
        url: r.ajax_url,
        dataType: "json",
        delay: 250,
        data: function(e) {
          console.log("Fetching points with term:", e.term); // Dodane logowanie
          return {
            ajax: 1,
            action: "searchPoints",
            country: r.selected_country,
            q: e.term,
            is_cod: r.validate_cod,
            page: e.page || 1
          }
        },
        processResults: function(e, t) {
          console.log("Fetched points:", e.items); // Dodane logowanie
          if (!e.items || e.items.length === 0) {
            console.log("No points found");
          } else {
            console.log("Points found:", e.items);
          }
          return t.page = t.page || 1, {
            results: s.map(e.items, function(e) {
              return e.id = e.name, e.text = e.label, e
            }),
            pagination: {
              more: 30 * t.page < e.total_count
            }
          }
        },
        error: function(err) {
          console.error("Error fetching points:", err); // Dodane logowanie
        },
        cache: !0
      },
      escapeMarkup: function(e) {
        return e
      },
      minimumInputLength: 1,
      templateResult: a,
      templateSelection: a
    })), s("." + r.module).not("." + r.validate_cod).hide(), s("." + r.module + "." + r.validate_cod).show(), r.validate_cod && r.point_required && 0 < r.point.length && l.updatePoint(r.point, "." + r.module + "-point-select")) : (s("." + r.module).hide(), r.point_required = !1)
  }
  String.prototype.repeat = function(e) {
    return new Array(e + 1).join(this)
  };
  var l = {
    setOptions: function(e) {
      void 0 === e.point || null !== e.point && e.point || (e.point = ""), s.extend(r, e), 0 < r.point.length && l.updatePoint(r.point, "." + r.module + "-point-select"), s("input.multi_carrier_poland").length ? r.carrier_selector = "input.multi_carrier_poland" : s(r.carrier_selector).length <= 0 && (s("input[name^='delivery_option']").length && (r.carrier_selector = "input[name^='delivery_option']"), s("input[name^='id_carrier']").length) && (r.carrier_selector = "input[name^='id_carrier']"), s(r.conf_btn + r.validate_fields).length <= 0 && (r.conf_btn = "button[name=confirmDeliveryOption]")
    },
    debug: function() {
      console.log(r)
    },
    init: function(e) {
      r.loaded || (void 0 !== e && l.setOptions(e), r.loaded = !0, r.id_interval = setInterval(function() {
        void 0 !== s && (s(function() {
          console.log(r.text_console, "font-size:18px;color:#e40037;"), r.hide_map || (s("." + r.module + "-map-container").remove(), s("body").append("<div class='" + r.module + "-map-container'><div id='sensbitgls-easypack-map'></div></div>"), s("." + r.module + "-map-container").click(function(e) {
            s(e.target).parents("." + r.module + "-map-container").length || (s(this).fadeOut(), r.map_is_open = !1)
          }), window.addEventListener("get_parcel_shop", function(e) {
            var t = e.target.ParcelShop.selected;
            console.log("Parcel shop selected:", t); // Dodane logowanie
            s(o).filter(":visible").each(function() {
              var e = s(this);
              e.hasClass(".point-select") || e.val(t.id);
              s(o).parents("." + r.module).find("." + r.select2 + "-selection__rendered").text([t.id, t.name, t.street, t.postal_code, t.city, t.country].join(", "));
              l.updatePoint(t.id, o);
            });
            s("." + r.module + "-map-container").fadeOut();
            r.map_is_open = !1;
          })), t(), s(document).on("change", r.carrier_selector, function() {
            t()
          }), r.use_interval && setInterval(function() {
            t()
          }, 500), s(document).on("change", "." + r.module + "-point-select", function() {
            var e = s(this);
            console.log("Point selected:", e.val()); // Dodane logowanie
            l.updatePoint(e.val(), e)
          }), s(document).on("click", r.conf_btn + ", input#cgv", function(e) {
            if (r.point_required && r.point.length <= 0) {
              e.preventDefault();
              s("." + r.module).addClass("error");
              alert(r.text_choose_point);
              s(this).is(":checkbox") && (s(r.conf_btn).prop("checked", !1), void 0 !== s.uniform) && s.uniform.update(r.conf_btn);
              s("." + r.module + "-map-btn").trigger("click");
              console.log("Point required but not selected."); // Dodane logowanie
            } else {
              s("." + r.module).removeClass("error");
              console.log("Proceeding to the next step."); // Dodane logowanie
            }
          }), s(document).on("change", "." + r.module + "-country-form select", function() {
            var e = s(this).find("option:selected").val();
            r.selected_country != e && (r.selected_country = e, s("#sensbitgls-easypack-map").html(""), n = !1)
          })
        }), clearInterval(r.id_interval))
      }, 300))
    },
    openMap: function(e, t) {
      r.map_is_open || (r.map_is_open = !0, o = e, s("." + r.module + "-map-container").fadeIn(400, function() {
        n || (n = !0, SzybkaPaczkaMap.init({
          lang: r.map_language,
          country_parcelshops: r.selected_country,
          el: "sensbitgls-easypack-map",
          map_type: !1,
          mapbox_key: "",
          geolocation: !0,
          center_point: r.customer_place,
          parcel_weight: r.order_weight
        }))
      }), s("." + r.module + "-map-container").hide().show())
    },
    updatePoint: function(t, o) {
      console.log("Updating point:", t); // Dodane logowanie
      s.ajax({
        url: r.ajax_url,
        type: "POST",
        data: {
          ajax: 1,
          action: "updatePoint",
          point: t,
          check_cod: r.validate_cod
        },
        success: function(e) {
          console.log("Update point response:", e); // Dodane logowanie
          if ("0" === e) {
            r.point = "";
            s(o).closest("." + r.module).find("." + r.select2 + "-selection__rendered").text("");
            e = r.text_point_cod;
            s.prototype.fancybox ? s.fancybox.open([{
              type: "inline",
              autoScale: !0,
              minHeight: 30,
              content: '<p class="fancybox-error">' + e + "</p>"
            }], {
              padding: 0,
              helpers: {
                overlay: {
                  locked: !1
                }
              }
            }) : alert(e);
          } else {
            r.point = t;
            s("." + r.module).removeClass("error");
          }
        }
      });
    }
  };
  return l
}($, (window, document));
