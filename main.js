document.addEventListener('DOMContentLoaded', function () { 
    var dropdowns = document.getElementsByClassName("dropdown");
    
    for (var i = 0; i < dropdowns.length; i += 1) {
        var dropdown = dropdowns[i];
        var menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.toggle("closed");
        dropdown.querySelector('.dropdown-content').style.display = "none";
        menu.addEventListener('click', function () {
            var content = this.parentElement.querySelector(".dropdown-content");
            var display = content.style.display;
            content.style.display = (display == "none") ? "initial" : "none";
            this.classList.toggle("closed");
            this.classList.toggle("open");
        }, false);
    }
    
    // LNTSG
    
    galoisSpeakers = ["James Newton", "Misja Steinmetz", "Fred Diamond", "Toby Gee", "Lorenzo la Porta", "Chris Birkbeck", "Raffael Singer", "Dougal Davis", "Rebecca Bellovin", "Ashwin Iyengar", "Pol van Hoften"];
    heckeSpeakers = ["Carl Wang-Erickson", "Chris Williams", "Joaquin Rodrigues Jacinto", "Alice Pozzi", "Robert Kurinczuk", "Andrew Graham", "Dan Gulotta", "Alex Torzewski", "Eran Assaf", "Ana Caraiani", "Alice Pozzi"];
    galoisTalks = ["Introduction I", "Deformations of representations of Galois groups", "The Taylor-Wiles method", "The obstructed Taylor-Wiles method of Calegari-Geraghty", "Homotopy background I: Simplicial objects", "Homotopy background II: Model categories", "Homotopy background III: Simplicial commutative rings", "Derived deformation theory in general", "Derived Galois deformation problems", "The derived deformation ring and patching", "The derived deformation ring and the derived Hecke algebra"];
    heckeTalks = ["Introduction II", "Introduction to the cohomology of arithmetic groups, I: comparison with automorphic forms", "Introduction to the cohomology of arithmetic groups, II: Matsushima's formula", "Derived Hecke algebra, I: Definition of Derived Hecke algebra", "Derived Hecke algebra, II: Satake isomorphism, Iwahori Hecke algebra", "Derived Hecke algebra in the Taylor-Wiles setting, I", "Derived Hecke algebra in the Taylor-Wiles setting, II: Reciprocity law", "The conjecture and its complex realization", "The complex realization of the conjecture", "The \\(p\\)-adic \\((\\ell=p)\\) realization of the conjecture", "The conjecture on weight one modular forms"];
    dates = ["January 9", "January 16", "January 23", "January 30", "February 6", "February 13", "February 20", "February 27", "March 6", "March 13", "March 20"];
    galoisNotes = [1,1,1,1,1,1,1,1,1,1,1];
    heckeNotes = [1,1,1,1,1,1,1,1,1,0,0];
    
    for (i = 0; i < dates.length; i += 1) {
        str = "<tr><td>" + dates[i] + "</td>" + (galoisNotes[i] ? "<td class='green'><a target='_blank' href='lntsg2019/G" + (i+1) + ".pdf'>": "<td>") + galoisTalks[i] + (galoisNotes[i] ? "</a>" : "") + "</td><td>" + galoisSpeakers[i] + "</td>" + (heckeNotes[i] ? "<td class='green'><a target='_blank' href='lntsg2019/H" + (i+1) + ".pdf'>": "<td>") + heckeTalks[i] + (heckeNotes[i] ? "</a>" : "") +  "</td><td>" + heckeSpeakers[i] + "</td></tr>";
        document.getElementById("lntsg_table").innerHTML += str;
    }

}, false);
