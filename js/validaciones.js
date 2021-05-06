function validacionContacto()
            {
                nom= document.getElementById('nombre').value;
                ape= document.getElementById('apellido').value;
                ed = document.getElementById('edad').value; 
                tipo = document.getElementById('opcion').selectedIndex;
                fono = document.getElementById('telefono').value;

                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Error.. debe ingresar un nombre');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }

                if(ape == null || ape.length==0 || /^\s+$/.test(ape))
                {
                    alert('Error.. debe ingresar un apellido');
                    document.getElementById('apellido').value="";
                    document.datos.ape.focus();
                    return false;
                }
                
                if(isNaN(ed) || ed.length == 0)
                 {
                    alert('Error...debe ingresar una edad válida');
                    document.getElementById('edad').value="";
                    document.datos.ed.focus();
                    return false;
                }

                if (tipo == null || tipo == 0)
                {
                    alert('Seleccione un tipo de consulta');
                    document.datos.opcion.focus();
                    return false;
                }

                if(!(/^\d{9}$/.test(fono)) )
                {
                    alert('Error...debe ingresar un teléfono válido');
                    document.getElementById('telefono').value="";
                    document.datos.fono.focus();
                    return false;
                }    
                return true;      

                
            }